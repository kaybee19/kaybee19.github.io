<template>
  <div class="footer">
    <small class="textSmall">always looking for opportunities</small>
    <small class="textSmall">please don't hesitate to reach out</small>
    <div class="d-lg-flex w-100 my-4">
      <a href="mailto:gafaikabir@yahoo.com">
        <h3 class="font-weight-bold text-white"><u>gafaikabir@yahoo.com</u></h3>
      </a>
      <div class="ml-auto mt-5 mt-lg-0">
        <a class="logoClass ml-lg-5 mr-4 mr-lg-0" target="_blank" href="mailto:gafaikabir@yahoo.com">
          <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
        </a>
        <a class="logoClass ml-lg-5 mr-4 mr-lg-0" target="_blank" href="https://www.linkedin.com/in/kabir-gafai-64868a100/">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>
        <a class="logoClass ml-lg-5 mr-4 mr-lg-0" target="_blank" href="https://github.com/kaybee19">
          <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        </a>
        <a class="logoClass ml-lg-5 mr-4 mr-lg-0" target="_blank" href="https://www.pinterest.com/enigma_no19/">
          <font-awesome-icon class="icon" :icon="['fab', 'pinterest']" />
        </a>
      </div>
    </div>
    <small class="footText">© 2020 DEVELOPED BY KABIR GAFAI</small>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script> 

<style>
  
  .footer {
    margin-top: 20%;
    text-align: left;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .textSmall {
    color: gray;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .75px!important;
  }

  .footText {
    font-family: Helvetica, Arial;
    letter-spacing: .75px!important;
    opacity: .25;
    font-size: 60%;
    margin-top: auto;
  }

  .icon {
    font-size: 1.75rem;
  }

  .logoClass {
    color: white;
  }
  .logoClass:hover {
    color: gray;
  }

</style>