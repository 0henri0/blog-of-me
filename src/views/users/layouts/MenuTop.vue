<<template>
    <header class="header fixed-top">
       <div class='row justify-content-center mr-0 ml-0 h-100'>
            <div class='col-lg-8'>
                <div class='menu-top'>
                       <nav class="navbar navbar-expand-lg bg-white navbar-light h-100 pt-0 pb-0">
                           <router-link :to="{ name: 'home' }"  class="navbar-brand pt-0 pb-0"><span class='avatar-header float-left'><img src='https://www.w3schools.com/howto/img_girl.jpg' /></span></router-link>
                        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                           
                            <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link :to="{ name: 'home' }"  class="nav-link">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'posts' }"  class="nav-link">Posts</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'about-me' }"  class="nav-link">About Me</router-link>
                            </li>    
                            </ul>
                        </div>  
                    </nav>
                </div>
            </div>
        </div>
    </header>
</div>
</template>

<script>
export default {
  name: "MenuTop",
  data: function() {
    return {};
  }
};
</script>
