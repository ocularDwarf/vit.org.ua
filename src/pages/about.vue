<template>
  <div class="about">
    <div class="container">
      <div class="about-description">
        <div class="img-firm">
          <gallery :images="images" :index="index" @close="index = null"></gallery>
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '400px', height: '300px' }"
          ></div>
        </div>
      <div class="firm-description-text">
        <p>
          Туристична фірма "ВІТ" знаходиться в місті Самбір, вул. Мазепи 3/2, Тел.(03236) 60634 / +38 (096) 0948960 mail: vit.ltd@ukr.net.
        </p>
        <p></p>
        <p>
          Генеральний директор ТзоВ "ВІТ" - Чобанюк Василь Миколайович .
        </p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        images: [
          './../static/img/fotoFirm/IMG_4840.jpg',
          './../static/img/fotoFirm/IMG_4841.jpg',
          './../static/img/fotoFirm/IMG_4843.jpg',
          './../static/img/fotoFirm/IMG_4844.jpg'
        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script>

<style>
  .about {
    background: #f6f6f6;
  }
.about-description{
  margin: 12.5rem 0;
  width: 100%;
  box-shadow: 3px 6px 16px rgba(0, 0, 0, .5);
  overflow: hidden;
  padding: 30px;
}
.img-firm{
  display: flex;
  justify-content: space-between;
}
.image{
  background-repeat:no-repeat;
  background-size: contain;
  cursor: pointer;
}
  .firm-description-text{
    margin-top: 2.5rem;
  }
</style>
