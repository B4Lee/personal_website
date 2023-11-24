<template>
    <div>
      <div class="basis-1/2 bg-white dark:bg-slate-800 py-8 px-4">
        <div class="text-center font-bold xl:prose-xl mx-auto prose dark:prose-invert pb-4">{{poster.title}}</div>
        <NuxtContent class="prose text-left prose-sm sm:prose lg:prose-lg xl:prose-3xl mx-auto dark:prose-invert" :document="poster" />
      </div>
      <!-- <div class="flex justify-center ">
        <div v-if="prev" class="ring ring-blue-300 hover:ring-blue-500 rounded-md p-4 m-3 mt-10">
          <NuxtLink :to="prev.slug"> {{ prev.title }} </NuxtLink>
        </div>
        <div v-if="next" class="ring ring-blue-300 hover:ring-blue-500 rounded-md p-4 m-3 mt-10">
          <NuxtLink :to="next.slug"> {{ next.title }} </NuxtLink>
        </div>
      </div> -->
    </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const poster = await $content('post', params.slug).fetch()
      const [prev, next] = await $content('post')
        .only(['title', 'slug'])
        .sortBy('date', 'asc')
        .surround(params.slug)
        .fetch()
      return {
        poster,
        prev,
        next
      }
    }
  }
</script>
