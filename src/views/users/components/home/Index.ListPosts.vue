<template>
  <div class="home-list-post">
    <HomePost/>
    <HomePost/>
    <HomePost/>
  </div>
</template>

<script>
import HomePost from "./Index.Post";
export default {
  name: "HomeListPost",
  components: { HomePost }
};
</script>
