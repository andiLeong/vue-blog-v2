<template>
  <div class="py-16">
    <div class="text-center">
      <p class="text-sm font-semibold text-sky-600 uppercase tracking-wide">
        404 error
      </p>
      <h1
        class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
      >
        Page not found.
      </h1>
      <p class="mt-2 text-base text-gray-500">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-6">
        <AppLink
          class="text-base font-medium text-sky-600 hover:text-sky-500"
          :to="{ name: 'home' }"
        >
          Go back home
        </AppLink>
      </div>
    </div>
  </div>
</template>
