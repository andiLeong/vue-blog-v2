<template>
    <ComponentLayout
        class="my-10"
        title="Conditionally display/hide element based on other element is on viewport"
    >
        <div class="md:grid grid-cols-3 space-y-4 md:space-y-0">
            <div>
                side bar
                <div>
                    <button
                        id="js-reply-button"
                        class="bg-blue-500 py-2 px-5 rounded text-white"
                    >
                        Reply
                    </button>
                </div>
            </div>
            <div>
                content
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut corporis, dignissimos eaque magnam modi molestias nihil
                    non nulla quae, rem sapiente sit soluta unde ut, voluptas.
                    Asperiores labore mollitia quos?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    architecto blanditiis consectetur, ex, exercitationem fuga
                    libero maiores odit repellat similique soluta tempore vel
                    voluptatum! Ab aliquid amet atque beatae consectetur
                    consequuntur, dolore dolorem dolores ducimus est harum
                    incidunt ipsum laudantium magni maiores maxime nam
                    necessitatibus obcaecati quae, quaerat quas quasi rem
                    repellat sapiente sit, temporibus tenetur vero. Aspernatur
                    blanditiis dolorem ducimus eum fuga nihil optio saepe,
                    tenetur totam. Aliquam corporis dicta dolor ea, facere illo
                    illum, incidunt ipsam nobis quam soluta sunt, tempora
                    voluptas! Asperiores, consequatur magnam. Ab aliquam debitis
                    deserunt dicta dolor expedita fugit hic, molestias, nemo
                    neque non nostrum nulla numquam quia recusandae tempore
                    temporibus totam vitae? Ad delectus, enim eos exercitationem
                    fuga hic ipsam iste itaque iure labore magnam maxime minima,
                    modi molestias necessitatibus odit officiis provident quis
                    sapiente sequi. Autem consequatur cumque eius est explicabo
                    fugiat id impedit, inventore iusto labore maiores minus nam
                    numquam reiciendis temporibus tenetur vitae, voluptas?
                    Consectetur eius modi quisquam. A accusamus at consectetur,
                    corporis dignissimos dolores et explicabo ipsum iusto odit
                    ratione recusandae! Ad alias at atque beatae culpa cumque
                    cupiditate dolores ea eos est exercitationem id nesciunt non
                    obcaecati, perferendis provident quidem recusandae
                    repudiandae sint soluta temporibus ullam velit voluptatibus.
                </p>
            </div>
        </div>

        <div class="fixed bottom-0 right-0 pb-3 mr-4">
            <ShowWhenHidden element="#js-reply-button">
                <button
                    class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-blue-500"
                >
                    <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </ShowWhenHidden>
        </div>
    </ComponentLayout>
</template>

<script setup>
import ShowWhenHidden from '@/components/ShowWhenHidden.vue';
import ComponentLayout from '@/components/ComponentLayout.vue';
</script>
