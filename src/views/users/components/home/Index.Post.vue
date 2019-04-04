<template>
  <div class="home-post border rounded-lg mb-5">
    <div class="row title-home-post mr-0 ml-0 pl-2">
      <div class="col pl-0 pr-0">
        <a href="#">
          <span>
            <img
              class="rounded-circle"
              src="https://www.w3schools.com/howto/img_girl.jpg"
              alt="scac"
            >
          </span>
          <span class="title-name-home-post ml-3">thais</span>
        </a>
        <span class="title-name-home-post-edit">
          <i class="fa fa-ellipsis-h"></i>
        </span>
      </div>
    </div>

    <div class="content-home-post row">
      <div class="col">
        <img src="https://www.w3schools.com/howto/img_girl.jpg" alt="scac">
      </div>
    </div>

    <div class="footer-home-post pl-2 pr-2">
      <div class="footer-home-post-icon row ml-0 mr-0 mb-2">icon</div>
      <div class="footer-home-post-status row ml-0 mr-0 mb-2">status</div>
      <div class="footer-home-post-comment row ml-0 mr-0 mb-1">comment</div>
    </div>
    <div class="footer-home-post-input-cmt row ml-0 mr-0">input</div>
  </div>
</template>

<script>
export default {
  name: "HomePost"
};
</script>

