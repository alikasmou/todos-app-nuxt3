<template>
  <div class="w-full flex alert shadow-lg">
    <div class="w-9/12 h-full flex justify-start items-center">
     <p class="w-[85%] max-w-full truncate pr-2">{{todo.text}}</p>
    </div>
    <div class="w-3/12 h-full flex justify-end items-center gap-2">
      <button><Details/></button>
      <button class="btn btn-xs btn-error">Delete</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ITodo from '~~/types/ITodo'
import Details from "./TodoDetails.vue"
export default defineComponent({
    setup() {
        
    },
    props:{
        todo:{
          required:true,
          type:Object as PropType<ITodo>
        }
    },
    components:{Details}


})
</script>
<style scoped>
</style>