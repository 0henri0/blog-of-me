<template>
  <div class="home-post border rounded-lg">
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

    <div class="footer-home-post pl-4 pr-2">
      <div class="footer-home-post-icon row ml-0 mr-0 mb-2 mt-2">
          <i class="fa fa-heart-o fa fa-2x mr-2" aria-hidden="true"></i>
          <i class="fa fa-share fa fa-2x ml-auto mr-2" aria-hidden="true"></i>
      </div>
      <div class="footer-home-post-status row ml-0 mr-3 mb-2"><span> <strong>Thai: </strong>Bánh rán mật, n giobánh được n thơm hơn và màu sắc đậm đà bắt mắt...</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePost"
};
</script>

