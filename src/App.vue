<template>
  <div id="app">
    <vue-particles
      class="particle"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="portfolio col-md-10 col-xl-8 px-lg-5 mx-auto">
    <b-container fluid="xl">
      <Header />
      <Hello />
      <Work />
      <Footer />
    </b-container>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Header from './components/Header.vue'
import Work from './components/Work.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Hello,
    Header,
    Work,
    Footer
  }
}
</script>

<style>

  @font-face {
    font-family: 'Candara';
    src: url('./assets/font/Candara.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('./assets/font/OpenSans-Bold.ttf');
    font-weight: normal;
    font-style: normal;
  }


  #app {
    background-color: #111111;
    font-family: 'Candara'!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .particle {
    width: 100%;
    position: fixed;
    top: 55%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0; 
    background-color: #111111;
  }

  .portfolio {
    color: white;
    background-attachment: fixed;
    padding: 2.5%;
  }

</style>
