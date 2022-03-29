<template>
  <div class="w-full flex justify-center h-12 px-4 bg-indigo-200 rounded-md">
    <div class="w-9/12 h-full flex justify-start items-center">
     <p class="w-[85%] max-w-full truncate pr-2">{{todo.text}}</p>
    </div>
    <div class="w-3/12 h-full flex justify-end items-center gap-2">
      <button class="bg-blue-500 px-4 py-1 rounded-md text-xs">Details</button>
      <button class="bg-emerald-500 px-4 py-1 rounded-md text-xs">Edit</button>
      <button class="bg-orange-500 px-4 py-1 rounded-md text-xs">Delete</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ITodo from '~~/types/ITodo'
export default defineComponent({
    setup() {
        
    },
    props:{
        todo:{
          required:true,
          type:Object as PropType<ITodo>
        }
    }

})
</script>
<style scoped>
</style>