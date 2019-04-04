<template>
  <div class="wrapper">
    <MenuTop/>
    <router-view></router-view>
  </div>
</template>
<script>
import MenuTop from "./MenuTop";
export default {
  name: "IndexHome",
  components: {
    MenuTop
  }
};
</script>
