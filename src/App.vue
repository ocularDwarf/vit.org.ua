<template>
    <div class="wrapper">
        <header-nav v-if="$route.path !== '/'"></header-nav>
        <transition name="fade">
          <router-view class="cont"></router-view>
        </transition>
        <footer-nav v-if="$route.path !== '/'" class="footer"></footer-nav>
      </div>
</template>

<script>
import headerNav from './components/header.vue'
import footerNav from './components/footer.vue'
import { router } from './router/index'
export default {
    components : {
        headerNav,
        footerNav
    }
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.css";
  @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
  @import "../node_modules/animate.css/animate.min.css";
  @font-face {
    font-family: 'Ubuntu-Bold';
    src: url('./assets/fonts/Ubuntu-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'SegoeUI';
    src: url('./assets/fonts/segoeUI.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PT-SansRegular';
    src: url('./assets/fonts/pt-sansRegular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  html{
    line-height: 1.3;
    font-size: 16px;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: "PT-SansRegular", sans-serif;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }


  .wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .cont{
    flex: 1 0 auto;
  }

  .footer{
    flex: 0 0 auto;
  }
  .container{
    position: relative;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }



  h1,h2,h3,h4,h5,h6{
    margin: 0;
  }

  ul,li{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }


  p{
    margin: 0;
    text-indent: 10px;
  }


  a{
    text-decoration: none;
    cursor: pointer;
  }

  textarea{
    resize: none;
  }

  input,
  select,
  button{
    outline: none;
  }

  *, *:before, *:after{
    box-sizing: border-box;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-enter{
    opacity: 0;
  }
</style>
