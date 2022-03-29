<template>
  <div class="flex justify-center items-stretch h-10 gap-2">
      <input type="text" id="todo.id" vv-model="todo.text" class="input" />
      <button class="btn" @click="add()">Add</button>
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
            alert('ok')
        }
    }
})
</script>
<style scoped>
.input{
  @apply block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-500 focus:outline-none shadow-md shadow-violet-500/50
}
.btn{
  @apply inline-flex items-center justify-center px-6 bg-violet-400 text-white font-semibold leading-tight uppercase rounded shadow-md hover:bg-violet-500 hover:shadow-lg focus:bg-violet-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-600 active:shadow-lg transition duration-150 ease-in-out h-full shadow-violet-500/50
}
</style>