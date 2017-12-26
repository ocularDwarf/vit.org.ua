<template>
  <div class="slider">
    <ul class="slides" :style="style">
      <li v-for="(slide,i) in playslides" :key="i">
        <div class="img" :style="{ background: `url(${slide.img})` }">

           <router-link to="features" class="enter-bg">
             <div class="enter-logo"></div>
             <span>Вхід</span>
           </router-link>
        </div>
      </li>
    </ul>
    <ul class="indicators">
      <li v-for="(slide,i) in slides" :key="i" @click="selectSlide(i)" :class="i==current ? 'active' : null">
        <div class="item">
          <span class="title">{{slide.title}}</span>
          <span class="progress">
            <div class="fill" :style="{ width: `${percent}%`}"></div>
            <div class="dot"></div>
          </span>
          <p class="mark">{{slide.mark}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        slides: [
          {
            img: "../static/img/tourism.jpg",
            title: "Туризм та навчання за кордрном",
            mark: "Туристична фірма “ВІТ” пропонує Вам  різні види відпочинку від щоденних турбот"
          },
          {
            img: "../static/img/courier.jpg",
            title: "Кур'єрська доставка TMM Express",
            mark: "Міжнародна мережа експрес-доставки вантажів та кореспонденції по всьому світу"
          },
          {
            img: "../static/img/visa.jpg",
            title: "Візова підтримка",
            mark: "Реєстрація на візу, Заповнення анкет, Оформлення страхівки на візу"
          },
          {
            img: "../static/img/tickets.jpg",
            title: "Бронювання квитків",
            mark: "Авіакаса, квитки на потяги, автобусні квитки"
          },
          {
            img: "../static/img/insurance.jpg",
            title: "Усі види страхування",
            mark: "Страхування на візу, страхування майна, страхування спортсменів"
          },
          {
            img: "../static/img/translation.jpg",
            title: "Переклади, легалізація, апостиль",
            mark: "Переклади всіх необхідних документів, завірення їх печаткою перекладача чи нотаріуса"
          },
          {
            img: "../static/img/appartment.jpg",
            title: "Подобова оренда квартири",
            mark: "Комфортні умови перебування"
          }
        ],
        current: 0,
        percent: 0,
        timer: 0,
        interval: 0,
        progress: 0,
        duration: 5000,
        playslides: []
      }
    },
    computed: {
      style() {
        switch (this.current % 2) {
          case 0:
            return { top: "0" };
          case 1:
            return { top: "-100%" };
        }
      }
    },
    methods: {
      selectSlide(i) {
        this.current = i;
        this.playslides[this.current % 2] = this.slides[this.current];
        this.resetPlay();
      },
      process() {
        this.current++;
        if (this.current >= this.slides.length) {
          this.current = 0;
        }
        this.playslides[this.current % 2] = this.slides[this.current];
        this.resetPlay();
      },
      going() {
        let time = new Date().getTime();
        this.percent = Math.floor(100 * (time - this.timer) / this.duration);
      },
      resetPlay() {
        clearInterval(this.interval);
        clearInterval(this.progress);
        this.play();
      },
      stop() {
        clearInterval(this.interval);
        clearInterval(this.progress);
      },
      play() {
        this.timer = new Date().getTime();
        this.progress = setInterval(this.going, this.duration / 100);
        this.interval = setInterval(this.process, this.duration);
      }
    },
    created() {
      this.playslides[0] = this.slides[0];
      this.playslides[1] = this.slides[1];
      this.play();
    }
  }


</script>


<style>
  .slider {
    position: relative;
    z-index: 1;
    overflow: hidden;
    height: 100vh;
  ul {
    list-style: none;
  &.slides {
     position: absolute;
     width: 100%;
     height: 100%;
     margin: 0;
     padding: 0;
     transition: top 800ms;
  li {
    height: 100%;
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    background-size: cover !important;
    background-position: 50%;
    background-repeat: no-repeat !important;

  }
  }
  }
  &.indicators {
     position: absolute;
     padding-right: 40px;
     right: 0;
     top: 50%;
     transform: translateY(-50%);
     z-index: 2;
     text-align: right;
  li {
    clear: both;
  .item {
    position: relative;
    margin-bottom: 16px;
    float: right;
  }
  &:last-child .item {
     margin-bottom: 0;
   }
  .title {
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-family: 'SegoeUI-Bold', sans-serif;
    transition: font-size 0.6s ease-out;
  }
  .mark {
    color: #fff;
    font-family: 'SegoeUI-Semilight', sans-serif;
    font-size: 0.75rem;
    background-color: inherit;
  }
  .dot {
    position: absolute;
    top: 50%;
    right: -20px;
    margin-top: -5.5px;
    margin-left: 10px;
    width: 11px;
    height: 11px;
    background: #fff;
    border-radius: 50%;
  }
  .progress {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 2px;
    margin: 8px 0;
    background: rgba(255, 255, 255, 0.5);
  }
  &.active {
  .title {
    transition: font-size 0.6s ease-in;
    font-size: 36px;
    font-family: 'SegoeUI-Light', sans-serif;
  }
  .progress .fill {
    height: 100%;
    background: #fff;
  }
  }
  }
  }
  }
  }

  .enter-bg{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none !important;
  .enter-logo{
    background: url("./../assets/img/vit3.svg");
    z-index: 100;
    width: 8rem;
    height: 8rem;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    transition: all 2s ease;
   &:hover{
      transform: scale(1.6,1.6);
    }
  }
  span {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25rem;
    text-shadow: 0 2px 2px rgba(0,0,0,0.7);
  }
  }

</style>
