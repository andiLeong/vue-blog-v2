<template>
    <div class="bg-white rounded-lg p-4 flex items-stretch mb-1">
        <div>
            <UploaderProgress :progress="progress" />
        </div>
        <div class="flex flex-col justify-between">
            <div class="mb-2">
                <div class="font-medium mr-3 text-gray-700 leading-tight">
                    {{ upload.file.name }}
                </div>

                <div class="text-gray-600 text-sm leading-tight">
                    {{ sizeDisplay }} MB
                </div>
            </div>

            <div class="text-gray-600 text-sm align-baseline">
                <template v-if="state === states.WAITING">Waiting</template>
                <template v-if="state === states.FAILED">Failed</template>
                <template v-if="state === states.CANCELLED">Cancelled</template>
                <template v-if="state === states.COMPLETE">Complete</template>
                <template v-if="state === states.UNSUPPORTED"
                    >Sorry, this file type isn't supported</template
                >
                <template v-if="state === states.UPLOADING">
                    <a href="#" class="text-blue-500" @click.prevent="cancel">
                        Cancel
                    </a>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import states from '@/components/uploader/states.js';
import useHandleAjaxError from '@/composable/useHandleAjaxError';

import UploaderProgress from '@/components/uploader/components/UploaderProgress.vue';

export default {
    inject: ['model'],
    components: {
        UploaderProgress,
    },

    props: {
        upload: {
            required: true,
            type: Object,
        },

        baseURL: {
            required: true,
            type: String,
        },

        endpoint: {
            required: true,
        },
    },

    data() {
        return {
            state: null,
            progress: 0,

            axios: {
                cancel: null,
            },

            states,
        };
    },

    computed: {
        sizeDisplay() {
            return (this.upload.file.size / 1000000).toFixed(2);
        },
    },

    watch: {
        'upload.queued'(queued) {
            if (this.state === states.UNSUPPORTED) {
                return;
            }

            if (queued === false) {
                this.startUpload();
            }
        },

        progress(progress) {
            this.$emit('progress', {
                id: this.upload.id,
                progress,
            });
        },

        state(state) {
            this.$emit('change', {
                id: this.upload.id,
                state,
            });

            switch (state) {
                case states.CANCELLED:
                case states.FAILED:
                    this.progress = 0;
                    break;
            }
        },
    },

    methods: {
        cancel() {
            this.axios.cancel();
        },

        makeFormData(file) {
            const form = new FormData();
            form.append('file', file, file.name);
            form.append('last_modified', file.lastModified);
            form.append('fileable_id', this.model.id);
            form.append('fileable_type', this.model.name.value);
            return form;
        },

        handleUploadProgress(e) {
            this.progress = Math.round((e.loaded * 100) / e.total);
        },

        startUpload() {
            this.state = states.UPLOADING;

            axios
                .post(this.endpoint, this.makeFormData(this.upload.file), {
                    baseURL: this.baseURL,
                    onUploadProgress: this.handleUploadProgress,
                    cancelToken: new axios.CancelToken((token) => {
                        this.axios.cancel = token;
                    }),
                })
                .then(() => {
                    this.state = states.COMPLETE;
                })
                .catch((e) => {
                    useHandleAjaxError(e);

                    if (e instanceof axios.Cancel) {
                        return (this.state = states.CANCELLED);
                    }

                    this.state = states.FAILED;
                });
        },
    },

    mounted() {
        if (this.endpoint === null) {
            return (this.state = states.UNSUPPORTED);
        }

        this.state = states.WAITING;
    },
};
</script>
