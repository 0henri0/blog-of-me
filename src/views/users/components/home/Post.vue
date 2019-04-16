<template>
  <div class="home-post border rounded-lg">
    <div class="row title-home-post mr-0 ml-0 pl-2">
      <div class="col pl-0 pr-0">
        <a href="#">
          <span>
            <img class="rounded-circle" :src="post.album_img" alt="scac">
          </span>
          <span class="title-name-home-post ml-3">{{ post.album }}</span>
        </a>
        <span class="title-name-home-post-edit">
          <i class="fa fa-ellipsis-h"></i>
        </span>
      </div>
    </div>

    <div class="content-home-post row">
      <div class="col">
        <a href="javascript:void(0)">
          <img :src="post.url_image" :alt="post.content" @click="sendDataImage">
        </a>
      </div>
    </div>

    <div class="footer-home-post pl-4 pr-2">
      <div class="footer-home-post-icon row ml-0 mr-0 mb-2 mt-2">
        <i class="fa fa-heart-o fa fa-2x mr-2" aria-hidden="true"></i>
        <i class="fa fa-share fa fa-2x ml-auto mr-2" aria-hidden="true"></i>
      </div>
      <div class="footer-home-post-status row ml-0 mr-3 mb-2">
        <span>
          <strong>{{ post.album }}:</strong>
          {{ post.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePost",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    sendDataImage() {
      this.$emit("dataPost", {
        url_image: this.post.url_image,
        content: this.post.content,
        album_img: this.post.album_img,
        album_name: this.post.album
      });
    }
  }
};
</script>

