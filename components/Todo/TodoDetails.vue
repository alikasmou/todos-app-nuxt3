<template>
<ModalBox>
    <div class="card flex flex-col gap-4">
        <div class="">
            <h2>TASK TITLE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum ea odit architecto? Optio, voluptatum, veniam harum eos ut debitis nobis natus porro quaerat magni vitae adipisci, voluptatem expedita! Totam.</p>
        </div>
        
        <div class="w-full flex flex-col justify-start text-left gap-4 mt-4">
            <h3 class="uppercase">sub tasks</h3>
            <ul class="w-full flex flex-col gap-4">
                <li class="flex justify-between"><span>task 1</span><span>Edit | Delete | Details</span></li>
                <li class="flex justify-between"><span>task 2</span><span>Edit | Delete | Details</span></li>
                <li class="flex justify-between"><span>task 3</span><span>Edit | Delete | Details</span></li>
                <li class="flex justify-between"><span>task 4</span><span>Edit | Delete | Details</span></li>
            </ul>
        </div>
    </div>
</ModalBox>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ModalBox from "~~/components/Elements/Modal.vue"
export default defineComponent({
    components:{ModalBox}
})
</script>