<template>
  <div>
    <UploaderForm @chosen="handleFilesChosen" />

    <div
      class="mb-4 flex justify-between px-4 text-gray-600 text-sm dark:text-gray-100"
    >
      <span
        >{{ this.uploads.length }} uploads ({{ currentUploadCount }} in progress
        / {{ completedUploadCount }} complete)</span
      >
      <span>{{ overallProgress }}% complete</span>
    </div>

    <UploaderFile
      :endpoint="determineEndpointFor(upload.file.type)"
      :baseURL="options.baseURL"
      v-for="(upload, index) in uploads"
      :key="index"
      :upload="upload"
      @progress="handleUploadProgress"
      @change="handleUploadChange"
    />
  </div>
</template>

<script>
import options from '@/components/uploader/options.js';
import states from '@/components/uploader/states.js';
import get from 'lodash.get';
import { v4 as uuidv4 } from 'uuid';

import UploaderForm from '@/components/uploader/components/UploaderForm.vue';
import UploaderFile from '@/components/uploader/components/UploaderFile.vue';

export default {
  components: {
    UploaderForm,
    UploaderFile,
  },

  props: {
    options: {
      required: false,
      type: Object,
      default: () => options,
    },

    handlers: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      uploads: [],
    };
  },

  computed: {
    currentUploadCount() {
      return this.uploads.filter((upload) => upload.uploading).length;
    },

    completedUploadCount() {
      return this.uploads.filter((upload) => upload.complete).length;
    },

    overallProgress() {
      let uploads = this.uploads.filter(
        (upload) => !upload.cancelled && !upload.failed
      );

      if (uploads.length === 0) {
        return 0;
      }

      return parseInt(
        uploads.reduce((a, b) => a + b.progress, 0) / uploads.length
      );
    },
  },

  methods: {
    handleUploadChange(e) {
      switch (e.state) {
        case states.UPLOADING:
          this.uploads = this.uploads.map((upload) => {
            if (e.id === upload.id) {
              upload.uploading = true;
            }

            return upload;
          });
          break;
        case states.COMPLETE:
          this.uploads = this.uploads.map((upload) => {
            if (e.id === upload.id) {
              upload.complete = true;
              upload.uploading = false;
            }

            return upload;
          });
          break;
        case states.CANCELLED:
          this.uploads = this.uploads.map((upload) => {
            if (e.id === upload.id) {
              upload.cancelled = true;
              upload.uploading = false;
            }

            return upload;
          });
          break;
        case states.FAILED:
          this.uploads = this.uploads.map((upload) => {
            if (e.id === upload.id) {
              upload.failed = true;
              upload.uploading = false;
            }

            return upload;
          });
          break;
      }
    },

    handleUploadProgress(e) {
      this.uploads = this.uploads.map((upload) => {
        if (e.id === upload.id) {
          upload.progress = e.progress;
        }

        return upload;
      });
    },

    determineEndpointFor(fileType) {
      return get(this.handlers[fileType], 'endpoint', null);
    },

    handleFilesChosen(files) {
      console.log(files);
      this.uploads.push(
        ...Array.from(files).map((file) => {
          return {
            id: uuidv4(),
            progress: 0,
            uploading: false,
            complete: false,
            cancelled: false,
            failed: false,
            queued: true,
            file,
          };
        })
      );
    },
  },

  mounted() {
    setInterval(() => {
      if (this.currentUploadCount >= this.options.maxConcurrentUploads) {
        return;
      }

      let queued = this.uploads.filter((upload) => upload.queued === true);

      if (queued.length) {
        queued[0].queued = false;
      }
    }, 1000);
  },
};
</script>
