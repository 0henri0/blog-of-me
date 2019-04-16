<template>
  <div class="container">
    <div class="home-content row justify-content-center h-100">
      <div class="col-lg-8 col-xl-7">
        <home-list-post/>
      </div>
      <div class="col-lg-4 col-xl-4 pl-10 pr-10">
        <home-menu-right-lists/>
      </div>
    </div>
  </div>
</template>
<script>
import HomeListPost from "./PostLists";
import HomeMenuRightLists from "./MenuRightLists";
export default {
  name: "HomeIndex",
  components: { HomeListPost, HomeMenuRightLists }
};
</script>
