<template>
   <div class="header">
     <div class="container">
       <nav class="main-nav">
         <div class="main-nav__left">
           <router-link tag="a" to="/" title="VIT" class="home"><img src="../assets/img/vit3.svg" class="logo"/></router-link>
           <div class="nav__item">
             <router-link tag="a" to="/features" class="nav__link">Послуги</router-link>
             <router-link tag="a" to="/tourism" class="nav__link">Туризм</router-link>
             <router-link tag="a" to="/about" class="nav__link">Про нас</router-link>
             <router-link tag="a" to="/contact" class="nav__link">Контакти</router-link>
           </div>
         </div>
         <div class="main-nav__right">
           <li class="nav__item">
             <router-link class="nav__link"><img src="../assets/img/icons/telephone.svg" class="icon"/><span>+38 (093) 6325432</span></router-link>
           </li>
           <li class="nav__item">
             <router-link tag="a" to="/partners" class="nav__link"><img src="../assets/img/icons/hand-shake.svg" class="icon"/><span>партнери</span></router-link>
           </li>
           <li class="nav__item">
             <router-link tag="a" to="" class="nav__link"><img src="../assets/img/icons/grid-world.svg" class="icon"/><span>оберіть мову</span></router-link>
           </li>
           <li class="nav__item">
             <router-link tag="a" to="" class="nav__link"><img src="../assets/img/icons/menu-button-of-three-horizontal-lines.svg" class="icon"/><span>меню</span></router-link>
           </li>
         </div>
       </nav>
     </div>
   </div>
</template>

<script>
export default {


}

</script>

<style>
  .header {
    width: 100%;
    background: rgba(51, 131, 27, 1);
    z-index: 5;
    position: fixed;
    top: 0;
    overflow: hidden;
  }

  .home{
    overflow: hidden;
    /*background: #fff;*/
    /*border-radius: 20px;*/
    /*padding: 5px;*/
  }

  img.logo{
    width: 6rem;
    height: 6rem;
  }

  .main-nav {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    a {
      color: #fff;
      text-decoration: none;
    }


    &__left {
     display: flex;
     align-items: center;
    a {
      font-size: 1.2rem;
    }
  .nav__link{
    padding: 16px 10px;
  &:hover{
     box-shadow:inset 1px 1px 10px #fff;
   }
  }
  }

  &__right{
     display: flex;
  a.nav__link{
    font-size: 9px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
  .icon{
    width: 32px;
    height: 32px;
    margin: 5px auto;
  }
  }
  }
  }
</style>


