<template>
  <div class="workCont">
    <div class="workComp" v-bind:key="post.id" v-for="post in posts" :style="{ backgroundImage: 'url(' + post.bgimg + ')' }">
      <div class="col-12 col-sm-8 col-xl-7">
        <p class="subtitleText small">{{ post.subtitle }}</p>
        <h3 class="font-weight-bold" style="    text-transform: capitalize;">{{ post.title }}</h3>
        <p class="lead detailsText">{{ post.details }}</p>
        <p class="font-weight-bold">
        <a :href="post.link" target="_blank" class="linkClass" style="color: black">Go To Website</a>
         </p>
      </div>
      <div class="text-center col-12 col-sm-4 col-xl-5 m-auto">
        <img :src="post.img" alt="work-image" class="workImg">
      </div>
    </div>
  </div>  
</template>

<script>

  export default {
    name: 'WorkComp',
    props: ['posts']
  }

</script>

<style>

  .workComp {
    display: flex;
    position: relative;
    color: #111111;
    background-color: white;
    margin: 2rem auto;
    padding: 3rem;
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
  }
  .workComp:hover {
    transform: translateY(-2.5%);
    transition: .25s
  }

  .subtitleText {
    font-weight: bold!important;
    text-transform: uppercase;
    color: #616161;
    padding: 2rem auto;
    letter-spacing: 1px;
  }

  h3 {
    font-family: 'Open Sans'!important;
    margin-bottom: 10%;
  }

  .detailsText {
    margin: 15% 0;
  }

  .linkClass {
    margin-bottom: 10%;
    text-decoration: underline;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .workImg {
    position: relative;
    width: 100%;
    margin: auto;
    height: auto;
  }

  @media (max-width: 560px) {
    .workComp {
      padding: 1.5rem .5rem;
      flex-direction: column;
    }
    .workImg {
      margin-top: 10%;
      max-height: 175px;
      width: auto;
    }
  }

  @media (max-width: 900px) {
    .workComp {
      padding: 2rem 1rem;
    }
    h3 {
      font-size: 1.35rem!important;
    }
    .detailsText {
      font-size: 1rem!important;
    }
  }

</style>