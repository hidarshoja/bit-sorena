<script>
   import SectionOneHome from "../components/SectionOneHome.vue";
   import SectionTwoHome from "../components/SectionTwoHome.vue";
   import BlogComponentHome from "../components/BlogComponentHome.vue";
   import SliderComponentHome from "../components/SliderComponentsHome.vue";
  //  import CommentHome from "../components/CommentHome.vue";
   import DicComponentHome from "../components/DicComponentHome.vue";
   export default {
  components: {
    SectionOneHome,
    SectionTwoHome,
    BlogComponentHome,
    SliderComponentHome,
    DicComponentHome,
  },
};
 </script>

<template>
  <div class="Home">
   <SectionOneHome />
   <SectionTwoHome />
   <SliderComponentHome />
   <DicComponentHome />
   <!-- <CommentHome /> -->
   <BlogComponentHome />
  
  </div>
</template>
<style scoped>
  .Home{
    direction: rtl;
  }
</style>
