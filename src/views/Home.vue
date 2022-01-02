<template>
  <div class="pt-4">
    <div
      class="py-4 xl:py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      <div class="max-w-max lg:max-w-7xl mx-auto">
        <div class="relative z-10 mb-8 md:mb-2 md:px-6">
          <div class="text-base max-w-prose lg:max-w-none">
            <p class="dark:text-white" v-if="auth">welcome {{ user.name }}</p>
            <p class="dark:text-white" v-if="isAdmin">welcome admin</p>

            <p
              class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              Hi, I am andi liang,
            </p>
          </div>
        </div>
        <div class="relative">
          <div
            class="px-4 py-2 relative dark:bg-gray-600 rounded bg-zinc-100 md:p-6"
          >
            <div class="lg:grid lg:grid-cols-2 lg:gap-6">
              <div
                class="prose prose-indigo prose-lg text-gray-500 dark:text-white lg:max-w-none"
              >
                <p>
                  Ultrices ultricies a in odio consequat egestas rutrum. Ut
                  vitae aliquam in ipsum. Duis nullam placerat cursus risus
                  ultrices nisi, vitae tellus in. Qui non fugiat aut minus aut
                  rerum. Perspiciatis iusto mollitia iste minima soluta id.
                </p>
                <p>
                  Amet, eu nulla id molestie quis tortor. Auctor erat justo, sed
                  pellentesque scelerisque interdum blandit lectus. Nec viverra
                  amet ac facilisis vestibulum. Vestibulum purus nibh ac
                  ultricies congue.
                </p>
              </div>
              <div
                class="mt-6 prose prose-indigo prose-lg text-gray-500 dark:text-white lg:mt-0"
              >
                <p>
                  Erat pellentesque dictumst ligula porttitor risus eget et
                  eget. Ultricies tellus felis id dignissim eget. Est augue
                  maecenas risus nulla ultrices congue nunc tortor.
                </p>
                <p>
                  Eu leo risus porta integer suspendisse sed sit ligula elit.
                  Elit egestas lacinia sagittis pellentesque neque dignissim
                  vulputate sodales. Diam sed mauris felis risus, ultricies
                  mauris netus tincidunt. Mauris sit eu ac tellus nibh non eget
                  sed accumsan. Viverra ac sed venenatis pulvinar elit. Cras
                  diam quis tincidunt lectus. Non mi vitae, scelerisque felis
                  nisi, netus amet nisl.
                </p>
                <p>
                  Eu eu mauris bibendum scelerisque adipiscing et. Justo,
                  elementum consectetur morbi eros, posuere ipsum tortor. Eget
                  cursus massa sed velit feugiat sed ut. Faucibus eros mauris
                  morbi aliquam nullam. Scelerisque elementum sit magna
                  ullamcorper dignissim pretium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const auth = ref(store.state.loggedIn);
const user = ref(store.state.user);
const isAdmin = ref(store.state.isAdmin);
</script>
