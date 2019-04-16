<template>
  <div class="home-list-post">
    <div
      v-infinite-scroll="intersected"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <HomePost
        @dataPost="showModal"
        v-for="(post, index) in postsArray"
        :post="post"
        :key="index"
      />
    </div>
    <div>
      <b-modal
        ref="my-modal"
        hide-footer
        centered
        hide-header
        class="modal-image"
        size="xl"
        lazy
        busy
      >
        <div class="d-block">
          <div class="content-home-post row mr-0 ml-0">
            <div class="col-xs-12 col-md-8 pl-0 pr-0">
              <img
                ref="imageModal"
                id="imageModal"
                style="width: 100%"
                :src="post.url_image"
                :alt="post.content"
              >
            </div>
            <div ref="commentModal" class="comment-post-modal col-xs-12 col-md-4 pl-0">
              <div class="row align-items-center ml-0">
                <div class="col-3 pl-3 pr-0 align-middle">
                  <img
                    class="rounded-circle"
                    style="height: 40px; width:40px"
                    :src="post.url_image"
                    :alt="post.content"
                  >
                </div>
                <div class="col-9 pl-0" style="text-align:left!important">
                  <strong>{{post.album_name}}:</strong>
                  <span>{{post.content}}</span>
                </div>
              </div>

              <div class="row mt-4 pt-4 align-items-center border-top ml-0">
                <div class="col-3 pl-3 pr-0 align-middle">
                  <img
                    class="rounded-circle"
                    style="height: 40px; width:40px"
                    :src="post.url_image"
                    :alt="post.content"
                  >
                </div>
                <div class="col-9 pl-0" style="text-align:left!important">
                  <strong>{{post.album_name}}:</strong>
                  <span>{{post.content}}</span>
                </div>
              </div>
              <div class="row mt-4 pt-4 align-items-center border-top ml-0">
                <div class="col-3 pl-3 pr-0 align-middle">
                  <img
                    class="rounded-circle"
                    style="height: 40px; width:40px"
                    :src="post.url_image"
                    :alt="post.content"
                  >
                </div>
                <div class="col-9 pl-0" style="text-align:left!important">
                  <strong>{{post.album_name}}:</strong>
                  <span>{{post.content}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import HomePost from "./Post";
import axios from "axios";
import infiniteScroll from "vue-infinite-scroll";
export default {
  name: "HomeListPost",
  components: { HomePost },
  data() {
    return {
      postsArray: [],
      postsView: [],
      page: 1,
      key: 2,
      post: {}
    };
  },
  directives: { infiniteScroll },
  mounted() {},
  methods: {
    intersected() {
      axios
        .get("http://127.0.0.1:8000/api/?page=" + this.page++)
        .then(response => {
          let { postsArray, postView } = response.data;
          this.postsArray = [...this.postsArray, ...postsArray];
          this.postsView = postView;
          console.log(this.postsArray);
        });
    },
    async showModal(data) {
      this.post = data;
      await this.$refs["my-modal"].show();
      this.$nextTick(() => {
        this.$refs.commentModal.setAttribute(
          "style",
          `max-height: ${this.$refs.imageModal.clientHeight}px`
        );
      });
    }
  }
};
</script>

<style>
.modal-lg,
.modal-xl,
.modal-dialog {
  max-width: 1140px !important;
}
.modal-content {
  margin-left: 5%;
  margin-right: 5%;
}

@media (max-width: 576px) {
  .modal-content {
    margin-left: 13%;
    margin-right: 13%;
  }
}

@media (max-width: 768px) {
  .modal-content {
    margin-left: 13%;
    margin-right: 13%;
  }
}

.comment-post-modal {
  overflow: auto;
}
</style>
