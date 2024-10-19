<template>
  <section class="bg-white dark:bg-[#141414] flex flex-col h-full flex-grow">
    <div id="projects-card" class="mx-auto max-w-4xl flex flex-col flex-1 h-full w-full py-8 px-2 md:px-0 justify-start md:justify-center">
      <!-- <h1 class="text-dark font-bold dark:text-white text-2xl md:text-4xl">Past Works</h1>
      <br>
      <div v-for="project in projects" :key="project.id" class="flex flex-col h-full w-full space-y-2 py-4">
        <div class="flex flex-col md:flex-row w-full border-2  border-gray-200 dark:border-light rounded">
          <img alt="" aria-hidden="true" class="md:w-1/2" :src="project.img" />
          <div class="p-4 flex flex-col w-full md:w-1/2 space-y-4">
            <h1 class="font-bold text-xl"><a rel="noopener noreferrer" target="_blank" :href="`${project.path}`">{{ project.title }}</a></h1>
            <br>
            <p class="text-dark dark:text-white">{{ project.description }}</p>
            <br />
            <div class="flex flex-wrap mt-6 space-x-2">
              <div v-for="(stack, i) in project.stack" :key="i" class="rounded-sm mb-2 text-xs uppercase px-1  text-white font-bold bg-dark-green dark:bg-dark-green">{{stack}}</div>
            </div>
            <div class="flex ">
              <a class="font-semibold text-lg hover:underline" rel="noopener noreferrer" target="_blank" :href="`${project.path}`">🌐 Visit Website</a>
            </div>
          </div>
        </div>
      </div> -->
      <br>
      <div id="projects-card" class="mx-auto max-w-4xl flex flex-col flex-1 h-full w-full py-8 px-2 md:px-0 justify-start md:justify-center">
        <h1 class="text-dark font-bold dark:text-white text-2xl md:text-4xl">Portfolio</h1>
        <br>
        <div v-for="pt in portfolio" :key="pt.id" class="flex flex-col h-full w-full space-y-2 py-4">
          <div class="flex flex-col md:flex-row w-full border-2  border-gray-200 dark:border-light rounded">
            <img alt="" aria-hidden="true" class="md:w-1/2" :src="pt.img" />
            <div class="p-4 flex flex-col w-full md:w-1/2 space-y-3">
              <h1 class="font-bold text-xl stroke"><a rel="noopener noreferrer" target="_blank" :href="`${pt.path}`">{{ pt.title }}</a></h1>
              <br>
              <p class="text-dark dark:text-white">{{ pt.description }}</p>
              <br />
              <div class="flex flex-wrap space-x-2">
                <div v-for="(stack, i) in pt.stack" :key="i" class="rounded-sm mb-2 text-xs uppercase px-1  text-white font-bold bg-dark-green dark:bg-dark-green">{{stack}}</div>
              </div>
              <div class="flex space-x-4">
                <a class="font-semibold text-lg hover:underline" rel="noopener noreferrer" target="_blank" :href="`${pt.path}`">🔰 Visit Website</a>
                <a class="font-semibold text-lg hover:underline" rel="noopener noreferrer" target="_blank" :href="`${pt.source}`">☕ Source Code</a>
              </div>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
  </section>
</template>

<script>
import {projects, portfolio} from '../data/MyProjects'

export default {
  data() {
    return {
      projects,
      portfolio
    };
  }
}
</script>