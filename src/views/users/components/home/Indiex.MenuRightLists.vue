<template>
  <div class="home-content-right">
    <div class="home-content-right-posts rounded-lg">
      <div class="row mr-0 ml-0 fixed">
        <div class="home-content-right-title col pr-0 pl-0">
          <span
            class="home-content-right-title-span d-flex justify-content-center"
          >𝒻𝒶𝓋𝑜𝓇𝒾𝓉𝑒𝓈!</span>
        </div>
      </div>

      <div class="home-content-right-posts-content overflow-auto">
        <home-menu-right/>
        <home-menu-right/>
        <home-menu-right/>
        <home-menu-right/>
        <home-menu-right/>
      </div>
    </div>
    <div class="home-content-right-about mt-4">
      <p class="home-content-right-about-author mb-0">Author By Mr.Thai</p>
      <div>
        Contact:
        <a href="https://www.facebook.com/Mr.Thai.95">Facebook</a> |
        <a href="https://github.com/0henri0">Github</a>
      </div>
    </div>
  </div>
</template>

<script>
import HomeMenuRight from "./Index.MenuRight";
export default {
  name: "HomeMenuRightLists",
  components: {
    HomeMenuRight
  }
};
</script>

<style scoped>
.home-content-right-about-author a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.home-content-right-img {
  width: 100%;
}

.home-content-right-div-text {
  margin-top: auto;
  margin-bottom: auto;
}

.home-content-right-span-text {
  float: right;
  margin-right: 20px;
}

.home-content-right-title-span {
  color: #f33ca8;
  font-size: 25px;
  background-color: #f5d2d2;
}

.home-content-right-posts {
  background-color: #ffffff;
  border: 1px solid #dee2e6 !important;
}

.home-content-right-posts-content {
  height: 250px;
}
.home-content-right-about {
  color: #b1b2b3;
  text-align: center;
}
</style>
