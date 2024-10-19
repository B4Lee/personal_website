<template>
<section class="bg-white dark:bg-[#141414] flex flex-col h-full flex-grow">
  <div class="mx-auto max-w-4xl flex flex-col flex-1 h-full w-full py-8 px-2 md:px-0 justify-start md:justify-center">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img alt="Party" src="../static/icon.png" class="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl dark:text-white">Hi, I'm Iqbal!  👋 </h2>
        <p class="mt-4 noselect text-md md:text-lg md:text-left max-w-[550px] dark:text-white">
        A Web Developer from Indonesia 🇮🇩 <br> I use this site to document everything I learned from programming, my experience, and random thoughts.
          <!-- If you have any questions, <a class="underline relative z-10 font-semibold" href="/contact">contact me</a> -->
        </p>
        <!-- <p class="text-center dark:text-white md:text-left max-w-[550px]">Checkout my <a class="underline relative z-10 font-semibold" href="/projects">past works</a> or learn more <a class="underline relative z-10 font-semibold" href="/about">about me</a>.</p> -->
        <NuxtLink to="/about" class="mt-8 inline-flex items-center rounded border border-dark-green bg-dark-green px-8 py-3">
          <span class="text-sm text-white font-medium">About me 👉</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</section>
</template>