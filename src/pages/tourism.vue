<template>
  <div class="tourism">
    <div class="taor-img">
      <div class="taor-title">
        <div class="taor-title__description">
          <h2>Партнер компанії "ТАОР КАРПАТИ"</h2>
          <span>Час повертатися до природи</span>
        </div>
        <a href="https://taor.com.ua/" class="btn" target="_blank">Детальніше</a>
      </div>
    </div>
   <div class="container">
     <section class="greating">
         <h1 class="greating__title">Вітаємо Вас у компанії "ВІТ"</h1>
         <h1 class="greating__title">Відпочинок і туризм для кожного</h1>
         <p class="greating__paragraph">Туристична фірма “ВІТ” у м.Самборі пропонує Вам  різні види відпочинку від щоденних турбот. Додайте у своє життя нових яскравих вражень а також поповніть свій фотоальбом колоритними фотографіями та цікавими сувенірами. Туристична фірма “ВІТ”  працює на ринку туристичних послуг вже давно, співпрацює тільки з надійними партнерами і пропонує лише найкращі тури за найвигіднішими цінами!</p>
         <h1 class="greating__title">Обирайте ваш відпочинок</h1>
     </section>
     <section class="transport-select">
       <div class="tour-categories">
         <a @click="busBtn" class="tour-btn">
           <div class="btn-img bus"></div>
           <span>Автобусні тури</span>
         </a>
         <a @click="planeBtn" class="tour-btn">
           <div class="btn-img plane"></div>
           <span>Авіа тури</span>
         </a>
         <a @click="cruiseBtn" class="tour-btn">
           <div class="btn-img ship"></div>
           <span>Круізні тури</span>
         </a>
       </div>
     </section>
   </div>
    <div class="country-select">
     <div class="container">
       <transition name="transport-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
         <div v-if="transport === 1" class="bus-tours">
           <transition name="my-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
             <ul v-if="counter===1" name="switch" class="slider-panel">
               <li v-for="(value, key, index) in countries" :key="value.id" class="country-items" v-if="`${value.id}` <= 8">
                 <router-link :to="{name: 'country', params: {name: value.link}}" class="country-link" :key="value.id">
                   <img :src="`${value.img}`" class="img-country" :key="value.id">
                   <div class="country-name" :key="i">
                     <span :key="value.id">{{value.country}}</span>
                   </div>
                 </router-link>
               </li>
             </ul>
           </transition>

           <transition name="my-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
             <ul v-if="counter===2" name="switch" class="slider-panel">
               <li v-for="(value, key, index) in countries" :key="value.id" class="country-items" v-if="`${value.id}` > 8 && `${value.id}` <= 16">
                 <a :href="`${value.link}`" class="country-link" :key="value.id">
                   <img :src="`${value.img}`" class="img-country" :key="value.id">
                   <div class="country-name" :key="i">
                     <span :key="value.id">{{value.country}}</span>
                   </div>
                 </a>
               </li>
             </ul>
           </transition>

           <transition name="my-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
             <ul v-if="counter===3" name="switch" class="slider-panel">
               <li v-for="(value, key, index) in countries" :key="value.id" class="country-items" v-if="`${value.id}` > 16 && `${value.id}` <= 24">
                 <a :href="`${value.link}`" class="country-link" :key="value.id">
                   <img :src="`${value.img}`" class="img-country" :key="value.id">
                   <div class="country-name" :key="i">
                     <span :key="value.id">{{value.country}}</span>
                   </div>
                 </a>
               </li>
             </ul>
           </transition>

           <transition name="my-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
             <ul v-if="counter===4" name="switch" class="slider-panel">
               <li v-for="(value, key, index) in countries" :key="value.id" class="country-items" v-if="`${value.id}` > 24 && `${value.id}` <= 32">
                 <a :href="`${value.link}`" class="country-link" :key="value.id">
                   <img :src="`${value.img}`" class="img-country" :key="value.id">
                   <div class="country-name" :key="i">
                     <span :key="value.id">{{value.country}}</span>
                   </div>
                 </a>
               </li>
             </ul>
           </transition>

           <transition name="my-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
             <ul v-if="counter===5" name="switch" class="slider-panel">
               <li v-for="(value, key, index) in countries" :key="value.id" class="country-items" v-if="`${value.id}` > 32 && `${value.id}` <= 40">
                 <a :href="`${value.link}`" class="country-link" :key="value.id">
                   <img :src="`${value.img}`" class="img-country" :key="value.id">
                   <div class="country-name" :key="i">
                     <span :key="value.id">{{value.country}}</span>
                   </div>
                 </a>
               </li>
             </ul>
           </transition>

           <div class="pag">
             <button @click="btn1" class="country-btn">1</button>
             <button @click="btn2" class="country-btn">2</button>
             <button @click="btn3" class="country-btn">3</button>
             <button @click="btn4" class="country-btn">4</button>
             <button @click="btn5" class="country-btn">5</button>
           </div>
         </div>
       </transition>

       <transition name="transport-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
          <div v-if="transport === 2" class="air-tour">
            <h2>АВІАТУРИ</h2>
           <div class="theme-img">
             <img src="../assets/img/airport1.jpg" alt="airport">
             <img src="../assets/img/airport2.jpg" alt="airport">
             <img src="../assets/img/airport3.jpg" alt="airport">
             <img src="../assets/img/airport4.jpg" alt="airport">
           </div>
            <span>Обрати свій тур ви зможете за одним із посилань: </span>
            <div class="tour-redirect">
              <a href="http://www.anextour.com.ua/" target="_blank" class="tour-logo anex-icon"></a>
              <a href="https://www.tez-tour.com/ru/dp/search.html" target="_blank" class="tour-logo tez-icon"></a>
              <a href="https://joinup.ua/poisk-tura-full/" target="_blank" class="tour-logo joinUp-icon"></a>
              <a href="https://www.tpg.ua/ru/airtickets/tab-charter/" target="_blank" class="tour-logo tpg-icon"></a>
              <a href="http://www.tui.ua/" target="_blank" class="tour-logo tui-icon">TUI</a>
            </div>
          </div>
       </transition>

       <transition name="transport-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
         <div v-if="transport === 3" class="cruise-tour">
           <h2>Круїзні тури</h2>
           <div class="theme-img">
             <img src="../assets/img/cruise1.jpg" alt="cruise">
             <img src="../assets/img/cruise2.jpg" alt="cruise">
             <img src="../assets/img/cruise3.jpg" alt="cruise">
             <img src="../assets/img/cruise4.jpg" alt="cruise">
           </div>
           <span>Обрати свій тур ви зможете за одним із посилань: </span>
           <div class="tour-redirect">
             <a href="https://inflotcruises.com/?lang=uk&lang_action=update" target="_blank" class="tour-logo inflot-icon"></a>
             <a href="http://panukraine.ua/ru/cruises" target="_blank" class="tour-logo panukraine-icon"></a>
           </div>
         </div>
       </transition>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        counter: 1,
        transport: 1,
        countries: [
          {
            id : "1",
            img: "../static/img/countries/albania_pic.jpg",
            country: "Албанія",
            temperature: "23",
            link: "albania",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "2",
            img: "../static/img/countries/austria_pic.jpg",
            country: "Австрія",
            temperature: "23",
            link: "austria",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "3",
            img: "../static/img/countries/belarus_pic.jpg",
            country: "Білорусія",
            temperature: "23",
            link: "belarus",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "4",
            img: "../static/img/countries/belgian_pic.jpg",
            country: "Бельгія",
            temperature: "23",
            link: "belgium",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "5",
            img: "../static/img/countries/bolgaria_pic.jpg",
            country: "Болгарія",
            temperature: "23",
            link: "bolgaria",
            "description": "Теплі пляжі і все інше"
          },
          {
            id : "6",
            img: "../static/img/countries/bosnia_pic.jpg",
            country: "Боснія і Герцеговина",
            temperature: "23",
            link: "bosniigercogovyna",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "7",
            img: "../static/img/countries/gb_pic.jpg",
            country: "Великобританія",
            temperature: "23",
            link: "gb",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "8",
            img: "../static/img/countries/georgia_pic.jpg",
            country: "Грузія",
            temperature: "23",
            link: "georgia",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "9",
            img: "../static/img/countries/greece_pic.jpg",
            country: "Греція",
            temperature: "23",
            link: "greece",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "10",
            img: "../static/img/countries/denmark_pic.jpg",
            country: "Данія",
            temperature: "23",
            link: "denmark",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "11",
            img: "../static/img/countries/estonia_pic.jpg",
            country: "Естонія",
            temperature: "23",
            link: "estonia",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "12",
            img: "../static/img/countries/ireland_pic.jpeg",
            country: "Ірландія",
            temperature: "23",
            link: "ireland",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "13",
            img: "../static/img/countries/italiy_pic.png",
            country: "Італія",
            temperature: "23",
            link: "italy",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "14",
            img: "../static/img/countries/spain_pic.jpg",
            country: "Іспанія",
            temperature: "23",
            link: "spain",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "15",
            img: "../static/img/countries/latvia_pic.jpg",
            country: "Латвія",
            temperature: "23",
            link: "latvia",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "16",
            img: "../static/img/countries/lytva_pic.jpg",
            country: "Литва",
            temperature: "23",
            link: "lytva",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "17",
            img: "../static/img/countries/luxemburg_pic.jpg",
            country: "Люксембург",
            temperature: "23",
            link: "luxemburg",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "18",
            img: "../static/img/countries/makedonia_pic.jpg",
            country: "Македонія",
            temperature: "23",
            link: "makedonian",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "19",
            img: "../static/img/countries/netherlands_pic.jpg",
            country: "Нідерланди",
            temperature: "23",
            link: "netherlands",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "20",
            img: "../static/img/countries/germany_pic.jpg",
            country: "Німеччина",
            temperature: "23",
            link: "germany",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "21",
            img: "../static/img/countries/norwegia_pic.jpg",
            country: "Норвегія",
            temperature: "23",
            link: "norway",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "22",
            img: "../static/img/countries/poland_pic.jpg",
            country: "Польща",
            temperature: "23",
            link: "poland",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "23",
            img: "../static/img/countries/portugal_pic.jpg",
            country: "Португалія",
            temperature: "23",
            link: "portugal",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "24",
            img: "../static/img/countries/romonian_pic.jpg",
            country: "Румунія",
            temperature: "23",
            link: "romania",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "25",
            img: "../static/img/countries/sanmarino_pic.jpg",
            country: "Сан-Марино",
            temperature: "23",
            link: "san-marino",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "26",
            img: "../static/img/countries/serbia_pic.jpg",
            country: "Сербія",
            temperature: "23",
            link: "serbia",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "27",
            img: "../static/img/countries/slovakia_pic.jpg",
            country: "Словаччина",
            temperature: "23",
            link: "slovakia",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "28",
            img: "../static/img/countries/slovenia_pic.jpg",
            country: "Словенія",
            temperature: "23",
            link: "slovenia",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "29",
            img: "../static/img/countries/turkey_pic.jpg",
            country: "Туреччина",
            temperature: "23",
            link: "turkey",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "30",
            img: "../static/img/countries/hungary_pic.jpg",
            country: "Угорщина",
            temperature: "23",
            link: "hungary",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "31",
            img: "../static/img/countries/ukrain_pic.jpg",
            country: "Україна",
            temperature: "23",
            link: "ukraine",
            description: "Теплі пляжі і все інше"
          },
          {
            id: "32",
            img: "../static/img/countries/finland_pic.png",
            country: "Фінляндія",
            temperature: "23",
            link: "finland",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "33",
            img: "../static/img/countries/france_pic.jpg",
            country: "Франція",
            temperature: "23",
            link: "france",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "34",
            img: "../static/img/countries/horvatia_pic.jpg",
            country: "Хорватія",
            temperature: "23",
            link: "horvatija",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "35",
            img: "../static/img/countries/chehiya_pic.jpg",
            country: "Чехія",
            temperature: "23",
            link: "chech_republic",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "36",
            img: "../static/img/countries/montenegro_pic.jpg",
            country: "Чорногорія",
            temperature: "23",
            link: "chornogoria",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "37",
            img: "../static/img/countries/sweitzaria_pic.jpg",
            country: "Швейцарія",
            temperature: "23",
            link: "switherland",
            description: "Теплі пляжі і все інше"
          },
          {
            id : "38",
            img: "../static/img/countries/sweden_pic.jpg",
            country: "Швеція",
            temperature: "23",
            link: "swedish",
            description: "Теплі пляжі і все інше"
          }
        ]
      }
    },
    methods: {
      busBtn: function () {
        this.transport = 0;
        setTimeout(() => {this.transport = 1}, 1000);
      },
      planeBtn: function () {
        this.transport = 0;
        setTimeout(() => {this.transport = 2}, 1000);
      },
      cruiseBtn: function () {
        this.transport = 0;
        setTimeout(() => {this.transport = 3}, 1000);
      },
      btn1: function () {
        this.counter = 0;
        setTimeout(() => {this.counter = 1}, 1000);
      },
      btn2: function () {
        this.counter = 0;
        setTimeout(() => {this.counter = 2}, 1000);
      },
      btn3: function () {
        this.counter = 0;
        setTimeout(() => {this.counter = 3}, 1000);
      },
      btn4: function () {
        this.counter = 0;
        setTimeout(() => {this.counter = 4}, 1000);
      },
      btn5: function () {
        this.counter = 0;
        setTimeout(() => {this.counter = 5}, 1000);
      }
    }
  }
</script>

<style>
  .tourism{
    background: #f6f6f6;
  }

  .taor-img{
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
    background-image: url("../assets/img/taor.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  .btn {
    margin-top: 10px;
    z-index: 3;
    background: #25f75d;
    background-image: linear-gradient(to bottom, #25f75d, #229122);
    border-radius: 12px;
    font-family: "Ubuntu-Bold", Arial, sans-serif;
    color: #ffffff;
    font-size: 24px;
    padding: 10px 20px 10px 20px;
    cursor: pointer;

  &:hover{
     background: #3cb0fd;
     background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
     text-decoration: none;
   }
  }
  }


  h1.greating__title {
    text-align: center;
    font-weight: lighter;
    font-size: 2.5rem;
    line-height: 1.25rem;
    margin: 1.75rem;

  }
  section.greating{
    padding-top: 5rem;
    padding-bottom: 2.5rem;
    border-bottom: solid 1px #333;
  }

  .taor-title{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .taor-title__description{
    text-align: center;
    color: #fff;
  h2{
    font-size: 42px;
    font-family: "Segoe Script", sans-serif;
  }
  span{
    font-size: 32px;
    font-family: "Segoe Script", sans-serif;
  }
  }

  .tour-categories{
    display: flex;
    justify-content: space-around;
    margin: 2.5rem 0;
  }

  .tour-btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btn-img{
    width: 5rem;
    height: 5rem;
  }
  .bus{
    background: url("../assets/img/icons/bus.svg");
  }
  .plane{
    background: url("../assets/img/icons/aeroplane.svg");
   }
  .ship{
    background: url("../assets/img/icons/cruise.svg");
  }
  .country-select{
    background: url('../../static/img/tour-bg.jpg');
    width: 100%;
    height: 100%;
  }

  .bus-tours{
    padding-bottom: 3.75rem;
    overflow: hidden;
  }
  .slider-panel{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: .3125rem;
  }
  .country-items{
    margin: 5px 5px 50px 5px;
    border-radius: 4px;
    width: 220px;
    height: 200px;
  a{
    color: rgba(51,51,51,0.8);
    text-decoration: none
  }
  }
  img.img-country{
    width: 100%;
    height: 200px;
    border-radius: 4px 4px 0 0;
  }
  .country-name{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background: #fff;
    width: 100%;
    height: 40px;
  }

  .pag{
    display: flex;
    justify-content: center;
  }
  .country-btn{
    background: #3498db;
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    border-radius: 4px;
    color: #ffffff;
    font-size: 12px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
      background: #3cb0fd;
      background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
      text-decoration: none
     }
  }

  .air-tour, .cruise-tour{
    margin: 2.5rem 0;
    background: #fff;
    h2{
      font-size: 1.25rem;
      color: #fff;
      padding: .625rem;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    img {
      margin: 1.25rem;
      width: 200px;
      height: 200px;
    }
    span{
      font-size: 1.25rem;
      margin: 2.25rem;
      padding: .625rem;
      border-radius: 10px;
      color: #fff;
    }
  }

  .air-tour {
    span{
      background: #00cc96;
    }
    h2{
      background: #00cc96;
    }
  }

  .cruise-tour{
    span{
      background: #3a99d7;
    }
    h2{
      background: #3a99d7;
    }
  }

  .theme-img{
    display: flex;
    justify-content: space-around;
  }

  .tour-redirect{
    display: flex;
    justify-content: space-around;
    margin: 1.25rem;
  }


/*TOUR FIRM ICON*/

  .anex-icon{
    background: url("../assets/img/icons/anex-20-logo.svg");
  }

  .tez-icon{
    background: url("../assets/img/icons/teztour_logo.png");
  }

  .joinUp-icon{
    background: url("../assets/img/icons/joinup.png");
  }

  .tpg-icon{
    background: url("../assets/img/icons/top_logo.png");
  }
  .tui-icon{
    color: red;
    font-size: 3rem;
  }

  .inflot-icon{
    background: url("../assets/img/icons/inflot.png");
  }

  .panukraine-icon{
    background: url("../assets/img/icons/panukraine.png");
  }


  .tour-logo{
    display: block;
    width: 180px;
    height: 70px;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    margin: 1.25rem;
  }

  /*TOUR FIRM ICON END*/


</style>
