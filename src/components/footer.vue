<template>
  <footer>
    <div class="container">
      <div class="info-company">
        <div class="info-company__item">
          <div class="icon icon-calendar"></div>
          <div class="work-days"><span>Робочі дні Пн-Сб</span><br/><span>9:00 - 17:30 (Субота до 14:00)</span></div>
        </div>
        <div class="info-company__item">
          <div class="icon icon-email"></div>
          <div class="email-info"><span>vit.org.ua@ukr.net</span><br/></div>
        </div>
        <div class="info-company__item">
          <div class="icon icon-smartphone"></div>
          <div class="phone-info"><span>+38 (03236) 60634</span><br/><span>+38 (096) 0948960</span></div>
        </div>
      </div>
      <div class="sociasls">
        <a href="#" class="icon icon-facebook"></a>
        <a href="#" class="icon icon-twitter"></a>
        <a href="#" class="icon icon-telegram"></a>
        <a href="#" class="icon icon-vk"></a>
      </div>
    </div>
  </footer>

</template>

<script>

</script>

<style>
  footer{
    border-top: solid 1px #eee;
    background: rgba(51, 131, 27, 1);
  .container{
    display: flex;
    padding: .625rem;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }
  .icon{
    margin-right: 1.25rem;
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  }
  .info-company{
    display: flex;
    justify-content: space-around;
    flex: 3;
  }

  .info-company__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sociasls{
    display: flex;
  }

  .icon-calendar{
    background: url("../assets/img/icons/calendar.svg");
  }
  .icon-email{
    background: url("../assets/img/icons/envelope.svg");
  }
  .icon-smartphone{
    background: url("../assets/img/icons/smartphone-call.svg");
  }
  .icon-facebook{
    background: url("../assets/img/icons/facebook-white.svg");
    &:hover{
       background: url("../assets/img/icons/facebook-blue.svg");
  }

  }

  .icon-twitter{
    background: url("../assets/img/icons/twitter-white.svg");
    &:hover{
       background: url("../assets/img/icons/twitter-blue.svg");
     }
  }

  .icon-telegram{
    fill: #fff;
    background: url("../assets/img/icons/telegram.png");
  &:hover{
     background: url("../assets/img/icons/telegram-hover.svg");
   }
  }
  .icon-vk{
    background: url("../assets/img/icons/vk.svg");
  &:hover{
     background: url("../assets/img/icons/vk-hover.svg");
   }
  }

</style>
