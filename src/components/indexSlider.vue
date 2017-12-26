<template>
          <div class="slider">
            <ul class="slides" :style="style">
                <li v-for="(slide,i) in playslides" :key="i">
                    <div class="img" :style="{ backgroundImage: `url(${slide.img})` }">
                        <!--<div class="enter-bg">-->
                          <!--<button class="site-enter">Вхід на сайт</button>-->
                        <!--</div>-->
                    </div>
                </li>
            </ul>
            <ul class="indicators">
                <li v-for="(slide,i) in slides" :key="i" @click="selectSlide(i)" :class="i==current ? 'active' : null">
                    <div class="item">
                        <router-link v-bind:to="`{{slide.link}}`" class="title">{{slide.title}}</router-link>
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
                       img: "https://pixabay.com/get/eb33b80c28f1053ed1534705fb094197e673e6dc10ac104494f1c47aa0e9b2b8/adult-2693054_1920.jpg",
                       link: 'tour',
                       title: "Туризм",
                       mark: "Туристична фірма “ВІТ” пропонує Вам  різні види відпочинку від щоденних турбот"
                     },
                     {
                       img:"https://pixabay.com/get/eb32b80d21fd033ed1534705fb094197e673e6dc10ac104494f1c47aa1e5bcbe/adventure-2792992_1920.jpg",
                       link: 'tour',
                       title: "Кур'єрська доставка TMM Express",
                       mark: "Міжнародна мережа експрес-доставки вантажів та кореспонденції по всьому світу"
                     },
                     {
                         img:
                             "https://pixabay.com/get/e83db1082cf3003ed1534705fb094197e673e6dc10ac104494f1c47aa1ecb3b8/bunting-1807471_1920.jpg",
                       link: 'tour',
                         title: "Візова підтримка",
                         mark: "Реєстрація на візу, Заповнення анкет, Оформлення страхівки на візу"
                     },
                     {
                         img:
                             "https://pixabay.com/get/e837b1062df5043ed1534705fb094197e673e6dc10ac104494f1c47aaee4b1be/travel-1209515_1920.jpg",
                       link: 'tour',
                         title: "Бронювання квитків",
                         mark: "Авіакаса, квитки на потяги, автобусні квитки"
                     },
                     {
                         img:
                             "https://pixabay.com/get/eb35b60e29f2063ed1534705fb094197e673e6dc10ac104494f1c47aa0eab2bc/kai-bei-2071167_1920.jpg",
                       link: 'tour',
                         title: "Усі види страхування",
                         mark: "Страхування на візу, страхування майна, страхування спортсменів"
                     },
                     {
                         img:
                             "https://pixabay.com/get/e831b5072df6003ed1534705fb094197e673e6dc10ac104494f1c47aaeecb5b0/mountains-1448521_1920.jpg",
                       link: 'tour',
                         title: "Переклади, легалізація, апостиль",
                         mark: "Переклади всіх необхідних документів, завірення їх печаткою перекладача чи нотаріуса"
                     },
                     {
                       img:
                         "https://pixabay.com/get/ec35b10d21f11c22d9584518a34b4793e773ebdc04b0144094f5c270a7edb0/building-500295_1920.jpg",
                       link: 'tour',
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
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    .enter-bg{
      width: 230px;
      height: 120px;
      background: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      padding: 5px;
    }
    .site-enter{
      z-index: 3;
      width: 100%;
      height: 100%;
      background: url(../assets/img/logo.png);
      background-repeat: no-repeat;
      background-size: cover;
      border: none;
    }
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
    font-family: 'SegoeUI-Light';
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
</style>
