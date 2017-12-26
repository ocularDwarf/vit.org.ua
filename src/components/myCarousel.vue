<template>
  <div class="animated-carousel" >
    <div class="my-carousel">

      <transition name="img-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
        <div v-if="counter == 1" class="carousel-item1"><span>First item</span></div>
      </transition>
      <transition name="img-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
        <div v-if="counter == 2" class="carousel-item2">Second item</div>
      </transition>

      <ul class="tab-tour">
        <li><i class="turkey country-icon"></i>Австрія</li>
        <li><i class="turkey country-icon"></i>Азербайджан</li>
        <li><i class="turkey country-icon"></i>Андора</li>
        <li><i class="turkey country-icon"></i>Болгарія</li>
        <li><i class="turkey country-icon"></i>Великобританія</li>
        <li><i class="turkey country-icon"></i>Венгрія</li>
        <li><i class="turkey country-icon"></i>В'єтнам</li>
        <li><i class="turkey country-icon"></i>Німеччина</li>
        <li><i class="turkey country-icon"></i>Греція</li>
        <li><i class="turkey country-icon"></i>Грузія</li>
        <li><i class="turkey country-icon"></i>Домінікана</li>
        <li><i class="turkey country-icon"></i>Єгипет</li>
        <li><i class="turkey country-icon"></i>Ізраіль</li>
        <li><i class="turkey country-icon"></i>Індія</li>
        <li><i class="turkey country-icon"></i>Індонезія</li>
        <li><i class="turkey country-icon"></i>Іспанія</li>
        <li><i class="turkey country-icon"></i>Італія</li>
        <li><i class="turkey country-icon"></i>Катар</li>
        <li><i class="turkey country-icon"></i>Кіпр</li>
        <li><i class="turkey country-icon"></i>Китай</li>
        <li><i class="turkey country-icon"></i>Куба</li>
        <li><i class="turkey country-icon"></i>Маврикій</li>
        <li><i class="turkey country-icon"></i>Мальдіви</li>
        <li><i class="turkey country-icon"></i>Мексика</li>
        <li><i class="turkey country-icon"></i>ОАЕ</li>
        <li><i class="turkey country-icon"></i>Польша</li>
        <li><i class="turkey country-icon"></i>Португалія</li>
        <li><i class="turkey country-icon"></i>Сейшели</li>
        <li><i class="turkey country-icon"></i>Сінгапур</li>
        <li><i class="turkey country-icon"></i>Словакія</li>
        <li><i class="turkey country-icon"></i>США</li>
        <li><i class="turkey country-icon"></i>Тайланд</li>
        <li><i class="turkey country-icon"></i>Танзанія</li>
        <li><i class="turkey country-icon"></i>Туніс</li>
        <li><i class="turkey country-icon"></i>Турція</li>
        <li><i class="turkey country-icon"></i>Україна</li>
        <li><i class="turkey country-icon"></i>Фінлядія</li>
        <li><i class="turkey country-icon"></i>Франція</li>
        <li><i class="turkey country-icon"></i>Хорватія</li>
        <li><i class="turkey country-icon"></i>Чорногорія</li>
        <li><i class="turkey country-icon"></i>Чехія</li>
        <li><i class="turkey country-icon"></i>Швейцарія</li>
        <li><i class="turkey country-icon"></i>Шрі-Ланка</li>
        <li><i class="turkey country-icon"></i>Ямайка</li>
      </ul>

      <button @click="show1" class="my-btn">HI i'm button</button>
      <button @click="show2" class="my-btn">HI i'm button</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        counter: 1,
      }
    },
    methods: {
      show1: function () {
        this.counter = 0;
        setTimeout(() => {this.counter = 1}, 1000);
      },
      show2: function () {
        this.counter = 0;
        setTimeout(() => {this.counter = 2}, 1000);
      }
    }
  }

</script>



<style>
  .animated-carousel{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .my-carousel{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    width: 500px;
    height: 500px;
  }

  .carousel-item1{
    width: 100%;
    height: 100%;
    border: solid 1px #e83e8c;
    background: green;
  }

  .carousel-item2{
    width: 100%;
    height: 100%;
    border: solid 1px #e83e8c;
    background: royalblue;
  }
  .my-btn{
    padding: 10px;
    background: blue;
    border-radius: 20px;
  }

  .tab-tour{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  li{
    display: flex;
    align-items: center;
    background: #ededed;
    padding: .3125rem .625rem;
    border: solid 1px #25f75d;
    border-radius: 6px;
    margin: .625rem;
  }
  }

  /*-------COUNTRY ICONS--------*/


  .turkey{
    background: url("../assets/img/icons/country/turkey.svg");
  }



  .country-icon{
    width: 32px;
    height: 32px;
    display: block;
    margin-right: .625rem;
  }
  /*-------COUNTRY ICONS END-------*/

</style>
