<template>
    <div class="w-full flex justify-center">
        <div class="w-6/12 flex flex-col justify-center items-center gap-y-4 py-10">
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import ITodo from "~~/types/ITodo"

export default defineComponent({
    setup() {
        
    },
    props:{
        todos:{
            required: true,
            type: Array as PropType<ITodo[]>
        }
    },
    components:{}
})
</script>