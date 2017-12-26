<carousel :navigationEnabled="true" :perPage = "1">
  <slide class="slide">
    <div class="slide-item">111</div>
    <div class="slide-item">111</div>
  </slide>
  <slide class="slide">
    <div class="slide-item">111</div>
    <div class="slide-item">111</div>
  </slide>
  <slide class="slide">
    <div class="slide-item">111</div>
    <div class="slide-item">111</div>
  </slide>
  <slide class="slide">
    <div class="slide-item">111</div>
    <div class="slide-item">111</div>
  </slide>
  <slide class="slide">
    <div class="slide-item">111</div>
    <div class="slide-item">111</div>
  </slide>
  <slide class="slide">
    <div class="slide-item">111</div>
    <div class="slide-item">111</div>
  </slide>
</carousel>


<script>
  import { Carousel, Slide } from 'vue-carousel';


  export default {
    components: {
      Carousel,
      Slide
    }
  }
</script>


<style scoped>

  .slide-item{
    display: block;
    padding: 10px;
    box-sizing: border-box;
    width: 120px;
    height: 200px;
    border-radius: 10px;
  &:nth-child(odd){
     background: red;
   }
  &:nth-child(even){
     background: blue;
   }

</style>
