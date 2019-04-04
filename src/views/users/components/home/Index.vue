<template>
  <div class="container">
    <div class="home-content row justify-content-center h-100">
      <div class="col-lg-8 col-xl-7">
        <HomeListPost/>
      </div>
      <div class="col-lg-4 col-xl-4 border pl-10 pr-10 ">
      <div class="home-content-right"></div>

      </div>
    </div>
  </div>
</template>
<script>
import HomeListPost from "./Index.ListPosts";
export default {
  name: "HomeIndex",
  components: { HomeListPost }
};
</script>
