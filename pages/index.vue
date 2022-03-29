<template>
<NuxtLayout name="index">
    <template #header>TODOS APP WITH NUXT3</template>
    <template v-if="todos.length > 0" #todos>
        <div class="flex flex-col justify-center items-center">
            <div class="w-full flex justify-center items-center">
            <TodoInput class="w-4/12"/>
            </div>
            <Todos :todos="todos"/>
        </div>
    </template>
</NuxtLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoInput from '~~/components/Inputs/TodoInput.vue'
import Todos from '~~/components/Todo/TodoList.vue'
import ITodo from '~~/types/ITodo'

export default defineComponent({
    components:{TodoInput,Todos},
    setup() {
        const todos = ref<ITodo[]>([
            {id:"249puf3cqb24fc28fo384cfb",text:'this is a 1st task'},
            {id:"249puf3cqb24fc28fo384c23",text:'this is a 2nd task'},
            {id:"249puf3wetbwrv8fo384cfb2",text:'this is a 3rd task'},
            {id:"24efvweqefvew28fo384cfb4",text:'this is a 4th task'}
        ])
        return {todos}
    },
})
</script>
