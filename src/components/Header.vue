<template>
  <div>
    <b-navbar id="navBar" class="navbar fixed-top col-md-10 col-xl-8 px-lg-5 mx-auto px-3">
      <b-navbar-brand style="color: white">
        <img class="imgClass" :src="img" alt="kaybee-logo">
      </b-navbar-brand>

      <b-navbar-nav class="navContact" v-on:click="scrollToEnd()">
        contact
      </b-navbar-nav>
    </b-navbar>

  </div>
</template>


<script>

  export default {
    name: 'Header',
    data: function() {
      return {
        img: require('../assets/images/logo2.png')
      } 
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      scrollToEnd: function() {     
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
      },
      handleScroll: function () {
        let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        let elem = document.getElementById('navBar');

        if (scrollTop > 75) {
          elem.classList.add('scrollClass')
        } else if (scrollTop < 75) {
          elem.classList.remove('scrollClass')
        }
      }
    }
  }
  
</script> 

<style scoped>
  
  #navBar {
    color: white;
    padding-top: 2rem;
    background-color: #111111;
    margin: 0;
    transition: .25s;
  }
  .scrollClass {
    padding-top: .5rem!important;
    padding-bottom: 0rem!important;
    transition: .25s;
    box-shadow: 0 2px 40px 0 rgba(17,16,17,.8)
  }
  .scrollClass > .navbar-brand {
    opacity: .5;
  }

  .navContact {
    margin-left: auto;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2.5px;
    cursor: pointer;
  }
  .navContact:hover {
    color: rgba(255,255,255,.75);
  }

  .imgClass {
    width: auto;
    height: 50px;
  }

</style>