<template>
  <div class="contact">
    <div class="title-img">
      <img src="../assets/img/panorama.jpg" alt="tourism">
      <div class="contact-greeting">
        <h1>Зв'яжіться з нами</h1>
        <h2>Будемо раді вислухати вас!</h2>
      </div>
    </div>
    <div class="container">
      <div class="contact-info">
        <h2>Бажаєте поспілкуватись?</h2>
        <h1>Контактні деталі</h1>
        <p>Якщо у вас є запитання відповідь на які ви не знайшли на сайті, зв'яжіться з нами за телефонами або заповніть форму зворотнього зв'язку</p>
        <div class="info-item">
          <div class="pointer-blue"></div>
          <span class="adress">Україна м. Самбір вул. Мазепи 3</span>
        </div>
        <div class="info-item">
          <div class="smart-blue"></div>
          <span class="adress">+38 (093) 6325432</span>
        </div>
        <div class="info-item">
          <div class="email-blue"></div>
          <span class="adress">vit.org.ua@ukr.net</span>
        </div>
        <div class="info-item">
          <div class="skype-origin"></div>
          <span class="adress">vit.tours</span>
        </div>
        <div class="soc-buttons">
          <a href="#" >
            <div class="square-fb"></div>
          </a>
          <a href="#">
            <div class="square-vk"></div>
          </a>
          <a href="#">
            <div class="square-in"></div>
          </a>
          <a href="#">
            <div  class="square-tl"></div>
          </a>
        </div>
      </div>
      <div class="contact-form">
        <h2>Є запитання?</h2>
        <h1>Зв'язатися</h1>
        <b-alert :show="success" variant="success">ЛИСТА ВІДПРАВЛЕНО</b-alert>
        <b-alert variant="danger"
                 dismissible
                 :show="error"
                 @dismissed="showDismissibleAlert=false">
          ПОМИЛКА НА СЕРВЕРІ
        </b-alert>
        <form v-if="success == null" class="contact-form" @submit.prevent="auth(model)">
          <div class="form-group">
            <label class="control-label" for="name">Прізвище, Ім'я</label>
            <input class="form-control" type="text" placeholder="ПІБ" required v-model.lazy="model.name">
          </div>
          <div class="form-group" >
            <label class="control-label" for="email">Email</label>
            <input class="form-control" type="email" placeholder="Електронна скринька" required v-model.lazy="model.email">
          </div>
          <div class="form-group" >
            <label class="control-label" for="message">Ваше повідомлення</label>
            <textarea class="form-control"  placeholder="Введыть кілька рядків" required v-model.lazy="model.message"></textarea>
          </div>
          <button class="btn btn-primary btn-block" type="submit">Відправити</button>
        </form>
      </div>
    </div>

    <div class="map">
      <iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%9C%D0%B0%D0%B7%D0%B5%D0%BF%D0%B8%203%2C%20%D0%A1%D0%B0%D0%BC%D0%B1%D0%BE%D1%80%2C%20%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0&key=AIzaSyAMha790VttkyYFowMSRMB1tmInLvYnBXI" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        model: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    computed:{
      error(){
        return this.$store.getters.error
      },
      success(){
        return this.$store.getters.success
      }
    },
    methods: {
      ...mapActions(['auth']),
      dismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<style>
  @import "../../node_modules/vue-googlemaps/dist/vue-googlemaps.css";
  .contact {
    font-family: Roboto, sans-serif;
    background: #f6f6f6;
    color: #333;

  h2{
    font-family: "Segoe Script", sans-serif;
    font-size: 1.25rem;
    text-align: center;
  }
  h1  {
    font-size: 2rem;
    text-align: center;
  }
    .container{
      display: flex;
      justify-content: space-between;
      flex: 1;
    }
  img{
    width: 100%;
    height: 550px;
  }
  }
  .title-img{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact-greeting{
    position: absolute;
    text-shadow: 0 2px 2px rgba(0,0,0,0.8);
    color: #fff;
  }

  .contact-info{
    padding: 5rem 2rem;
    flex: 1;

    p{
      margin-top: 5rem;
    }
  }

  .info-item{
    display: flex;
    margin: .625rem;
  }
.soc-buttons{
  display: flex;
}
.contact-form{
  flex: 1;
  padding: 5rem 0;
}
  /* ICONS */

.pointer-blue{
  background: url("./../assets/img/icons/placeholder.svg");
}

.email-blue {
  background: url("./../assets/img/icons/blue-email.svg");
}
.smart-blue{
  background: url("./../assets/img/icons/smartphone.svg");
}
.skype-origin{
    background: url("./../assets/img/icons/skype-blue.svg");
  }

.pointer-blue, .email-blue, .smart-blue, .skype-origin {
  width: 32px;
  height: 32px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: .625rem;
  }



  .square-fb{
    background: url("./../assets/img/icons/facebook-square.svg");
  }
  .square-vk{
    background: url("./../assets/img/icons/vkontakte-square.svg");
  }
  .square-in{
    background: url("./../assets/img/icons/instagram-square.svg");
  }
  .square-tl{
    background: url("./../assets/img/icons/telegram-square.svg");
  }
  .soc-buttons div{
    width: 40px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 1rem 1rem 1rem 0;
  }
  /* ICONS END*/
</style>
