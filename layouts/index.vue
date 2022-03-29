<template>
  <div class="w-full h-screen bg-slate-800">
    <div class="w-full text-white font-sans font-bold text-center text-4xl py-10 uppercase">
      <slot v-if="header" name="header"/>
      <span v-else>Make Plan for your day</span>
    </div>
    <slot v-if="todos" name="todos"/>
    <div v-else class="w-full flex justify-center h-12 px-4 rounded-md">
      <span class="w-full mx-[5%] flex justify-center items-center uppercase h-12 px-4 bg-indigo-200 rounded-md" >nothing to do</span>
    </div>
  </div>
  <footer class="fixed bottom-0 w-fll py-4 flex justify-center items-center">Nuxt 3 &copy; {{ new Date().getFullYear() }}</footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
    computed:{
      header(){
        return this.$slots.header
      },
      todos(){
        return this.$slots.todos
      }
    }
})
</script>
