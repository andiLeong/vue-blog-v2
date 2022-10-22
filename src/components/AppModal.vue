<template>
    <div
        @click.prevent="hello"
        v-show="open"
        class="relative z-10 app-modal"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <!--        <transition-->
        <!--            enter-active-class="ease-out duration-300"-->
        <!--            enter-from-class="opacity-0"-->
        <!--            enter-to-class="opacity-100"-->
        <!--            leave-active-class="ease-in duration-200"-->
        <!--            leave-from-class="opacity-100"-->
        <!--            leave-to-class="opacity-0"-->
        <!--        >-->
        <div
            v-show="open"
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>
        <!--        </transition>-->
        <!--        @click.prevent="open = false"-->
        <div class="fixed z-10 inset-0 overflow-y-auto" @click.prevent="hello">
            <div
                class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
            >
                <!--                <transition-->
                <!--                    enter-active-class="ease-out duration-300"-->
                <!--                    enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"-->
                <!--                    enter-to-class="opacity-100 translate-y-0 sm:scale-100"-->
                <!--                    leave-active-class="ease-in duration-200"-->
                <!--                    leave-from-class="opacity-100 translate-y-0 sm:scale-100"-->
                <!--                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"-->
                <!--                >-->
                <div
                    v-show="open"
                    class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6"
                >
                    <div class="justify-end flex">
                        <button @click.prevent="open = false">x</button>
                    </div>
                    <div>
                        <slot />
                    </div>
                    <div class="mt-5 sm:mt-6">
                        <slot name="footer"></slot>
                    </div>
                </div>

                <!--                </transition>-->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    state: {
        type: Boolean,
        required: false,
        default: false,
    },
});
const open = ref(props.state);

watch(
    () => props.state,
    (newValue) => {
        if (newValue) {
            open.value = true;
        }
    }
);

function hello(e) {
    console.log('click on me');

    // var specifiedElement = e.target

    //I'm using "click" but it works with any event
    //     document.addEventListener('click', function(event) {
    //         var isClickInside = specifiedElement.contains(event.target);
    //
    //         if (!isClickInside) {
    //
    //             console.log(e.target)
    //             open.value = false
    //             //the click was outside the specifiedElement, do something
    //         }
    //     });
}

watch(open, () => {
    // if (open.value) {
    //
    //
    //     console.log('watching')
    //     document.addEventListener(
    //         'click',
    //         clickOutside
    //     );
    // }
});

function clickOutside(e) {
    if (!e.target.closest('.app-modal')) {
        open.value = false;
        document.removeEventListener('click', clickOutside);
    }
}
</script>

<style scoped></style>
