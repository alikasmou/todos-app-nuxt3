<template>
  <div class="flex justify-center items-stretch h-10 gap-2 w-full">
      <!-- <input type="text" id="todo.id" vv-model="todo.text" class="input" /> -->
      <input type="text" placeholder="Type here" class="input input-bordered w-full ">

      <button class="btn btn-info" @click="add()">Add</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
    data(){
        return{
            
        }
    },
    methods:{
        add(){
            // alert('ok')
        }
    }
})
</script>
<style scoped>
</style>