<template>
  <div
    class="add_box d-flex justify-content-center align-items-center m-3"
    @click="func"
  >
    <i class="mdi mdi-plus"> </i>
  </div>
</template>
<script>
export default {
  props: {
    func: Function
  }
};
</script>
