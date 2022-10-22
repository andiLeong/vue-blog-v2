<template>
    <nav class="mt-20 shadow bg-white dark:bg-gray-700">
        <!-- desktop nav -->
        <div class="hidden max-w-6xl mx-auto sm:flex justify-between px-4 h-16">
            <div class="flex space-x-8">
                <a
                    class="inline-flex items-center text-gray-500 hover:text-gray-700"
                    href="#"
                    >home</a
                >
                <a
                    class="inline-flex items-center text-gray-500 hover:text-gray-700"
                    href="#"
                    >about</a
                >
                <a
                    class="inline-flex items-center text-gray-500 hover:text-gray-700"
                    href="#"
                    >contact</a
                >
                <a
                    class="inline-flex items-center text-gray-500 hover:text-gray-700 border-b-2 border-b-sky-500"
                    href="#"
                >
                    project
                </a>
            </div>

            <div class="flex items-center space-x-4">
                <div>
                    <button
                        class="flex items-center space-x-2 text-gray-400 px-2"
                    >
                        <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span>search</span>
                    </button>
                </div>
                <div class="inline-flex items-center">
                    <div>
                        <button>
                            <img
                                class="rounded-full h-8 w-8"
                                src="https://avatars.githubusercontent.com/u/68339288?s=48&v=4"
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!--  mobile nav-->
        <div class="sm:hidden flex justify-end mx-4 h-16">
            <div class="flex items-center">
                <button
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="block h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <button
                    class="hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <div class="bg-white dark:bg-gray-700 sm:hidden space-y-3 mb-6">
        <ul class="">
            <li>
                <a
                    class="dark:bg-gray-700 dark:text-white text-gray-700 font-medium block px-3 py-2"
                    href=""
                    >Home</a
                >
            </li>
            <li>
                <a
                    class="dark:bg-gray-700 dark:text-white text-gray-700 font-medium block px-3 py-2"
                    href=""
                    >Contact</a
                >
            </li>
            <li>
                <a
                    class="dark:bg-gray-700 dark:text-white text-gray-700 font-medium block px-3 py-2"
                    href=""
                    >About</a
                >
            </li>
            <li>
                <a
                    class="dark:bg-gray-700 dark:text-white text-gray-700 font-medium block px-3 py-2"
                    href=""
                    >About</a
                >
            </li>
        </ul>
        <div class="space-y-4 my-4">
            <div class="mx-4 flex items-center space-x-4">
                <img
                    class="dark:border dark:border-white dark:border-2 rounded-full h-8 w-8"
                    src="https://avatars.githubusercontent.com/u/68339288?s=48&v=4"
                    alt=""
                />
                <p class="dark:text-gray-100 text-gray-700">Andi Liang</p>
            </div>

            <ul class="">
                <li>
                    <a
                        class="dark:bg-gray-700 dark:text-white text-gray-500 block px-3 py-2"
                        href=""
                        >Home</a
                    >
                </li>
                <li>
                    <a
                        class="dark:bg-gray-700 dark:text-white text-gray-500 block px-3 py-2"
                        href=""
                        >Contact</a
                    >
                </li>
                <li>
                    <a
                        class="dark:bg-gray-700 dark:text-white text-gray-500 block px-3 py-2"
                        href=""
                        >Contact</a
                    >
                </li>
                <li>
                    <a
                        class="dark:bg-gray-700 dark:text-white text-gray-500 block px-3 py-2"
                        href=""
                        >Contact</a
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
};
</script>

<style scoped></style>
