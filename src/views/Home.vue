<template>
  <div>
    <h1>HELLO THERE!</h1>
    {{ message }}
  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const message = ref("Stuff");

    return {
      message
    };
  }
});
</script>
