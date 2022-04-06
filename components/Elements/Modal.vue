<template>
<!-- The button to open modal -->
<label for="my-modal" class="btn btn-xs modal-button text-xs">edit</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle">
<div class="modal">
  <div class="modal-box">
    <slot/>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
</template>