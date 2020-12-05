<template>
  <div class="workBody">
    <div class="textSmall" style="margin-bottom: 5%">selected work</div>
    <WorkComp v-bind:posts="posts"
    />
  </div>  
</template>

<script>

  import WorkComp from './WorkComp';
  import WorkDetails from '../assets/WorkDetails.js';

  export default {
    name: 'Work',
    components: {
      WorkComp,
      WorkDetails
    },
    data() {
      return {
        posts: WorkDetails
      }
    }
  }

</script>

<style>
  .workBody {
    text-align: left;
  }
</style>