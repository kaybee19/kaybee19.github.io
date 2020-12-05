<template>
  <div class="hello">
    <p class="helloText">
      Hi there! My name is Kabir and I am developer. I specialize in websites and web applications. I develop in JavaScript and most of my projects are in React JS. I've recently gotten into Vue, and I also do a little graphic and UI design.
    </p>    
  </div>
</template>


<script>
  export default {
    name: 'Hello'
  }
</script> 

<style scope>
  
  .hello {
    margin: 50% auto 15%;
  }
  @media (min-width: 560px) {
    .hello {
      margin: 30% auto 25%;
    } 
  }
  @media (min-width: 900px) {
    .hello {
      margin: 25% auto 12.5%;
    } 
  }

  .helloText {
    font-size: 1.9rem;
    font-weight: bold;
    text-align: left;
    letter-spacing: .75px;
    line-height: 160%!important;
    width: 85%;
  }
  @media (max-width: 860px) and (max-height: 900px) {
    .helloText {
      width: 95%;
      font-size: 1.25rem!important;
    }
  }

</style>