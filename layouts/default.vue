<template>
  <div class="layouts">
    <NuxtHeader />
      <Nuxt />
    <NuxtFooter />
  </div>
</template>

<style>
.layouts {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* .page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.2s;
}

.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
}

.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
} */
</style>