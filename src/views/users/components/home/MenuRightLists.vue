<template>
  <div class="home-content-right">
    <div class="home-content-right-posts rounded-lg">
      <div class="row mr-0 ml-0 fixed">
        <div class="home-content-right-title col pr-0 pl-0">
          <span
            class="home-content-right-title-span d-flex justify-content-center"
          >ғᴀᴠᴏʀɪᴇs!</span>
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
        <a href="https://www.facebook.com/Mr.Thai.1612" target="_blank">Facebook</a> |
        <a href="https://github.com/0henri0" target="_blank">Github</a>
      </div>
    </div>

    <div class="home-content-right-about mt-2">
      <img
        v-if="canDisplay"
        :style="{'opacity': opacity}"
        id="poster"
        class="home-content-right-img-poster border border-info"
        v-bind:src="img"
        alt="scac"
      >
    </div>
  </div>
</template>

<script>
import HomeMenuRight from "./MenuRight";
import { setTimeout, setInterval, clearInterval } from "timers";
export default {
  name: "HomeMenuRightLists",
  components: {
    HomeMenuRight
  },
  data() {
    return {
      canDisplay: true,
      time: 250,
      opacity: 0,
      img: "https://www.w3schools.com/howto/img_girl.jpg"
    };
  },
  created() {},
  mounted() {
    var self = this;
    setInterval(() => {
      if (self.opacity < 1) {
        self.opacity += 0.1;
      } else {
        let dl = document.createElement("a");
        dl.href = self.img;
        self.opacity = 0;
      }
    }, 200);
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
  color: #0058ff;
  font-size: 25px;
  background-color: #d2d2d2;
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

.home-content-right-img-poster {
  height: auto;
  width: 100%;
}
</style>
