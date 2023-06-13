<template>
  <header aria-label="Site Header" class="sticky z-50">
    <div class="bg-white dark:bg-slate-800 shadow-sm pt-8">
      <div class="flex mx-auto items-center justify-between max-w-4xl">
        <div class="lg:flex items-center pr-4 bg-white dark:bg-slate-800 hidden md:hidden sm:block">
          <img src="../static/icon.png" class="h-8" alt="nuxtIcon" height="2rem" width="32px" />
          <NuxtLink
            class="font-semibold items-center justify-center text-center text-xl 4 px-2 dark:hover:bg-light transition duration-200 ease-in-out"
            to="/">Iqbal Anggoro
          </NuxtLink>
        </div>
      </div>
      <div class="flex mx-auto items-center justify-between max-w-4xl">
        <nav
          aria-label="Site Nav"
          class="hidden bg-white dark:bg-slate-800 gap-x-4 text-md font-medium lg:flex lg:w-0 lg:flex-1">
          <NuxtLink class="text-gray-900 dark:text-white hover:bg-gray-600" to="/">Home</NuxtLink>
          <NuxtLink class="text-gray-900 dark:text-white hover:bg-gray-600" to="/about">About</NuxtLink>
          <NuxtLink class="text-gray-900 dark:text-white hover:bg-gray-600" to="/blog">Blog</NuxtLink>
          <NuxtLink class="text-gray-900 dark:text-white hover:bg-gray-600" to="/projects">Projects</NuxtLink>
        </nav>
        <div class="items-center gap-4 lg:flex hidden md:hidden sm:block">
          <DarkToggle />
        </div>
      </div>
    </div>
    <div
      class="border-b  border-gray-100 lg:hidden bg-white dark:bg-slate-800 flex mx-auto items-center justify-between max-w-4xl">
      <nav class="flex items-center space-x-4 justify-center overflow-x-auto p-4 text-sm font-medium">
        <NuxtLink class="text-gray-900 dark:text-white" to="/">Home</NuxtLink>
        <NuxtLink class="text-gray-900 dark:text-white" to="/about">About</NuxtLink>
        <NuxtLink class="text-gray-900 dark:text-white" to="/blog">Blog</NuxtLink>
        <NuxtLink class="text-gray-900 dark:text-white" to="/projects">Projects</NuxtLink>
      </nav>
      <div class="items-center gap-4 lg:flex">
        <DarkToggle />
      </div>
    </div>
  </header>
</template>