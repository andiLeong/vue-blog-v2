<template>
    <ComponentLayout
        title="Counter you seen in countless wordpress site"
        class="space-y-8 my-20"
    >
        <div class="flex items-center justify-center space-x-8 mt-10">
            <div class="count-up">
                <AppCountUp :to="888" />
            </div>
            <div class="count-up">
                <AppCountUp :to="45" />
            </div>
            <div class="count-up">
                <AppCountUp :to="1998" />
            </div>
        </div>
        <div class="space-y-8">
            <div class="text-center">
                <a
                    href="https://gist.github.com/andiLeong/39fcbaf6afa77ec497869c7db1b7da34"
                    class="text-sky-600 underline text-sm"
                    >view gist</a
                >
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                aspernatur at consequuntur corporis culpa, debitis delectus
                deserunt dicta dolore doloribus dolorum earum illo modi neque
                nulla obcaecati odio omnis perferendis quasi quia quibusdam,
                quis quo, quod ratione sunt tenetur ullam. A aliquid architecto
                assumenda autem consectetur delectus doloremque ea, eaque
                eligendi esse et eum fuga harum illo incidunt itaque iusto nisi
                nobis optio quae quaerat quia quibusdam quod quos ratione,
                sapiente sequi sunt tempora tempore temporibus ut vel velit
                veniam vitae voluptas voluptatem voluptatum! Animi ea impedit
                iusto nisi quam repellat sunt tenetur, totam veritatis?
                Aspernatur consequatur minima reiciendis tenet Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Alias aspernatur at
                consequuntur corporis
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                aspernatur at consequuntur corporis culpa, debitis delectus
                deserunt dicta dolore doloribus dolorum earum illo modi neque
                nulla obcaecati odio omnis perferendis quasi quia quibusdam,
                quis quo, quod ratione sunt tenetur ullam. A aliquid architecto
                assumenda autem consectetur delectus doloremque ea, eaque
                eligendi esse et eum fuga harum illo incidunt itaque iusto nisi
                nobis optio quae quaerat quia quibusdam quod quos ratione,
                sapiente sequi sunt tempora tempore temporibus ut vel velit
                veniam vitae voluptas voluptatem voluptatum! Animi ea impedit
                iusto nisi quam repellat sunt tenetur, totam veritatis?
                Aspernatur consequatur minima reiciendis tenetur!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                aspernatur at consequuntur corporis culpa, debitis delectus
                deserunt dicta dolore doloribus dolorum earum illo modi neque
                nulla obcaecati odio omnis perferendis quasi quia quibusdam,
                quis quo, quod ratione sunt tenetur ullam. A aliquid architecto
                assumenda autem consectetur delectus doloremque ea, eaque
                eligendi esse et eum fuga harum illo incidunt itaque iusto nisi
                nobis optio quae quaerat quia quibusdam quod quos ratione,
                sapiente sequi sunt tempora tempore temporibus ut vel velit
                veniam vitae voluptas voluptatem voluptatum! Animi ea impedit
                iusto nisi quam repellat sunt tenetur, totam veritatis?
                Aspernatur consequatur minima reiciendis tenetur!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                aspernatur at consequuntur corporis culpa, debitis delectus
                deserunt dicta dolore doloribus dolorum earum illo modi neque
                nulla obcaecati odio omnis perferendis quasi quia quibusdam,
                quis quo, quod ratione sunt tenetur ullam. A aliquid architecto
                assumenda autem consectetur delectus doloremque ea, eaque
                eligendi esse et eum fuga harum illo incidunt itaque iusto nisi
                nobis optio quae quaerat quia quibusdam quod quos ratione,
                sapiente sequi sunt tempora tempore temporibus ut vel velit
                veniam vitae voluptas voluptatem voluptatum! Animi ea impedit
                iusto nisi quam repellat sunt tenetur, totam veritatis?
                Aspernatur consequatur minima reiciendis tenetur!
            </p>
        </div>

        <h1 class="text-center text-gray-700 font-bold">
            I am triggered when I enter to your eye
        </h1>
        <div class="flex items-center justify-center space-x-8 mt-10">
            <div class="count-up">
                <AppCountUp :to="888456" />
            </div>
            <div class="count-up">
                <AppCountUp :to="4599" />
            </div>
            <div class="count-up">
                <AppCountUp :to="199800" />
            </div>
        </div>
    </ComponentLayout>
</template>

<script setup>
import ComponentLayout from '@/components/ComponentLayout.vue';
import AppCountUp from '@/components/AppCountUp.vue';
</script>

<style scoped></style>
