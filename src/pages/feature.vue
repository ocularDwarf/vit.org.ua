<template>
  <div class="features">
    <section class="content">
      <div class="container">
        <div class="features-description">
          <h1>Компанія ТзОВ "ВІТ" пропогує ряд послуг</h1>
        </div>
        <b-tabs pills card vertical nav-wrapper-class="w-25" class="tabs">
          <b-tab title="Навчання за кордоном" active class="tab" style="overflow: hidden; display: flex; justify-content: space-around">
           <div class="study">
              <h2>Курси для молоді</h2>
             <ul class="course-description">
               <li>Для молоді від 13 років</li>
               <li>Мовні поїздки під наглядом досвідчених вожатих і різноманітні програми дозвілля</li>
               <li>Мовні курси також доступні для шкільних груп</li>
             </ul>
             <h2>Курси для дорослих</h2>
             <ul class="course-description">
               <li>Вивчення бажаної мови в спокійній атмосфері</li>
               <li>Знайомство з новою країною і її унікальною культурою</li>
               <li>Різноманітні курси для всіх рівнів мовної підготовки</li>
             </ul>
             <h2>Бізнес-курси</h2>
             <ul class="course-description">
               <li>Отримання специфічного мовного запасу</li>
               <li>Підходить для професіоналів та керівнків підприємств</li>
               <li>Курси ділової англійської та інших мов</li>
             </ul>
             <h2>Коледж - проживання для молоді</h2>
             <ul class="course-description">
               <li>Проживання на території каипусу університету</li>
               <li>Доступний в Англії і США</li>
               <li>Даний тип проживання доступний тільки літом</li>
             </ul>
           </div>
          </b-tab>
          <b-tab title="Кур'єрська доставка TMM Express" class="TMM">
            <div class="tmm-title-block">
              <img src="../assets/img/tmmexpress.png" alt="TMM-LOGO" class="tmm-logo">
              <div class="tmm-title-block_description">
                <h2>Welcome to TMM Express!</h2>
                <span>We carefully deliver your express consignments all over the world.</span>
              </div>
            </div>
            <div class="tmm-description-block">
              <p>ТММ Express сьогодні це міжнародна мережа експрес-доставки вантажів та кореспонденції по всьому світу, яка створена в 1992 році, з центральним офісом в Герцогстві Люксембург. Мережа об’єднує групу компаній, яка використовує найкращі транспортні рішення (автомобільні та авіаційні мережі), а також свій досвід побудови економічно вигідних рішень з міжнародної доставки вантажів.</p>
              <p>TMM Express робить все можливе для розвитку своїх сервісів і послуг, щоб задовольнити всі потреби своїх клієнтів в успішному розвитку їх бізнесу. Індивідуальний підхід до кожного клієнта у вирішенні його завдань здійснюється шляхом розробки гнучких і оптимальних рішень щодо надійної доставки вантажів будь-яким видом транспорту по всьому світу.</p>
              <p>TMM Express є сучасною мережею, що швидко розвивається. Основними принципами роботи є високий професіоналізм, відповідальність перед кожним клієнтом та надійність гарантованого результату.</p>
              <p>Основна мета – подальше підвищення ефективності діяльності компанії, участь у формуванні ринку вантажних перевезень і посилення лідерських позицій</p>
              <p>Місія – на основі знань і професійного досвіду створювати нові ефективні транспортні рішення, спрямовані на розвиток ринку перевезень і максимальне задоволення потреб клієнтів.</p>
              <a class="tmm-btn" href="https://s.siteapi.org/283222beea5d768.ua/docs/3d31bd33d8bf333e0e432b15e1522d9a37fd43e8.pdf" target="_blank">Умови перевезення</a>
            </div>
          </b-tab>

          <b-tab title="Візова підтримка">
            <div role="tablist">

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion1 variant="info">Реєстрація на візу (національна, шенген)</b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      Ви маєте можливість погодитись на запропоновану дату чи відмовитись.
                    </p>
                    <p class="card-text">
                      Якщо запропонована дата Вас не влаштувала, за деякий час Вам звону передзвонить оператор колл центру та запропонує ще одну дату.
                    </p>
                    <p class="card-text">
                      У разі Вашої повторної відмови від запропонованої дати, ваш сервісний збір буде деактивовано (необхідно буде повторно сплачувати сервісний збір).
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>


              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion2 variant="info">Заповнення анкети (національна віза, шенген віза, віза по карті поляка)</b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      Першим етапом у процесі подачі документів на відкриття візи є заповнення анкети. Посольство кожної країни подає свою аплікаційну форму, спосіб заповнення та подачі.
                    </p>
                    <p class="card-text">
                      Анкети для відкриття шенгенської візи подаються особисто в візовому центрі або в консульстві в паперовому вигляді і заповнюються від руки або на комп’ютері. Та все більше посольств переходять на онлайн подачу анкет. І дуже часто, навіть маючи певні знання іноземної мови, виникають труднощі при їх заповненні. Так, для прикладу, для отримання візи до США заповнення анкет, призначення співбесіди, подача фотографії, реєстрація на доставку документів в разі отримання дозволу на в’їзд, все подається в онлайн режимі.
                    </p>
                    <p class="card-text">
                      Наші менеджери допоможуть вам у цьому складному і відповідальному процесі, професійно заповнять анкети для подачі у посольство та консульство іноземних держав для отримання туристичної, гостьової, бізнес-візи, робочої та навчальної візи та ін.
                    </p>
                    <p class="card-text">
                      Зв’яжіться з нашим менеджером або завітайте в один з наших офісів та домовтесь про час зустрічі для заповнення анкети. Адже заповнення аплікаційних форм є тривалим процесом і перекладач планує свій робочий час так, щоб виділити на це достатньо часу.
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>


              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion3 variant="info">Оформлення страхівки на візу</b-btn>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      Оформлюючи візу для виїзду за кордон, особливу увагу слід приділяти страхуванню, яке є обов’язковою вимогою країн ЄС. Правильно оформлений поліс у надійній страховій компанії надасть вам справжній захист на весь час перебування за кордоном.
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion4 variant="info">Обгрунтована консультація щодо візових питань</b-btn>
                </b-card-header>
                <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      Центр візових консультацій надає інформацію про необхідні документи для отримання візи.
                    </p>
                    <p class="card-text">
                      Ми розглядаємо кожну ситуацію:
                    </p>
                    <p class="card-text">
                      &#8226 Виїзд з метою праці за кордон;
                    </p>
                    <p class="card-text">
                      &#8226 Бізнес за кордоном та співпраця з іноземцями;
                    </p>
                    <p class="card-text">
                      &#8226 Індивідуальні туристичні подорожі та подорожі цілої родини.
                    </p>

                  </b-card-body>
                </b-collapse>
              </b-card>

            </div>

          </b-tab>


          <b-tab @click="show = !show" title="Авіакаса, квитки на потяги, автобусні квитки" active>
            <div class="tickets">
              <transition name="img-animate" enter-active-class="animated slideInLeft">
                <div v-if="show" class="ticket-img"></div>
              </transition>
              <transition name="img-animate" enter-active-class="animated slideInLeft">
                <div v-if="!show" class="ticket-img"></div>
              </transition>

              <div class="tickets-description">

                <transition name="desc-animate" enter-active-class="animated slideInDown">
                  <div v-if="show" class="tickets-description_item"><span>Бронювання квитків</span></div>
                </transition>
                <transition name="desc-animate" enter-active-class="animated slideInDown">
                  <div v-if="!show" class="tickets-description_item"><span>Бронювання квитків</span></div>
                </transition>

                <transition name="desc-animate" enter-active-class="animated slideInRight">
                  <div v-if="show" class="tickets-description_item"><span>Low cost квитки</span></div>
                </transition>
                <transition name="desc-animate" enter-active-class="animated slideInRight">
                  <div v-if="!show" class="tickets-description_item"><span>Low cost квитки</span></div>
                </transition>

                <transition name="desc-animate" enter-active-class="animated slideInRight">
                  <div v-if="show" class="tickets-description_item"><span>Оn line chek-in</span></div>
                </transition>
                <transition name="desc-animate" enter-active-class="animated slideInRight">
                  <div v-if="!show" class="tickets-description_item"><span>Оn line chek-in</span></div>
                </transition>

                <transition name="desc-animate" enter-active-class="animated slideInRight">
                  <div v-if="show" class="tickets-description_item"><span>Квитки на потяги</span></div>
                </transition>
                <transition name="desc-animate" enter-active-class="animated slideInRight">
                  <div v-if="!show" class="tickets-description_item"><span>Квитки на потяги</span></div>
                </transition>

                <transition name="desc-animate" enter-active-class="animated slideInUp">
                  <div v-if="show" class="tickets-description_item"><span>Автобусні квитки по Україні та Європі</span></div>
                </transition>
                <transition name="desc-animate" enter-active-class="animated slideInUp">
                  <div v-if="!show" class="tickets-description_item"><span>Автобусні квитки по Україні та Європі</span></div>
                </transition>

              </div>
            </div>
          </b-tab>


          <b-tab @click="showInsurance = !showInsurance" title="Усі види страхування" active>
            <div class="insurance">
              <transition name="img-animate-insurance" enter-active-class="animated slideInLeft">
                <div v-if="showInsurance" class="insurance-img"></div>
              </transition>
              <transition name="img-animate-insurance" enter-active-class="animated slideInLeft">
                <div v-if="!showInsurance" class="insurance-img"></div>
              </transition>

              <div class="insurance-description">

                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="showInsurance" class="insurance-description_item"><span>страхування КАСКО</span></div>
                </transition>
                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="!showInsurance" class="insurance-description_item"><span>страхування КАСКО</span></div>
                </transition>

                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="showInsurance" class="insurance-description_item"><span>страхування автоцивілки</span></div>
                </transition>
                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="!showInsurance" class="insurance-description_item"><span>страхування автоцивілки</span></div>
                </transition>

                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="showInsurance" class="insurance-description_item"><span>Cтрахування на візу (постійним клієнтам знижка до 30%)</span></div>
                </transition>
                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="!showInsurance" class="insurance-description_item"><span>Cтрахування на візу (постійним клієнтам знижка до 30%)</span></div>
                </transition>

                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="showInsurance" class="insurance-description_item"><span>Cтрахування майна</span></div>
                </transition>
                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="!showInsurance" class="insurance-description_item"><span>Cтрахування майна</span></div>
                </transition>

                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="showInsurance" class="insurance-description_item"><span>страхування спортсменів</span></div>
                </transition>
                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="!showInsurance" class="insurance-description_item"><span>страхування спортсменів</span></div>
                </transition>

                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="showInsurance" class="insurance-description_item"><span>страхування для робочих поїздок в Чехію (найдешевша ціна з покриттям 60 тис. євро)</span></div>
                </transition>
                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="!showInsurance" class="insurance-description_item"><span>страхування для робочих поїздок в Чехію (найдешевша ціна з покриттям 60 тис. євро)</span></div>
                </transition>



                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="showInsurance" class="insurance-description_item"><span>cтрахування/Зелена Карта ( для поїздок за кордон)</span></div>
                </transition>
                <transition name="desc-animate-insurance" enter-active-class="animated slideInRight">
                  <div v-if="!showInsurance" class="insurance-description_item"><span>страхування/Зелена Карта ( для поїздок за кордон)</span></div>
                </transition>

              </div>
            </div>
          </b-tab>


          <b-tab title="Переклади, легалізація, апостиль" active>
            <div class="content-translate">
              <div class="content-translate_title">
                <h2>Переклади, легалізація та апостиль;</h2>
              </div>
              <div class="content-translate_description">
                <h2> - Усі види перекладів, відповідно до загальноприйнятих світових стандартів будь якого напрямку</h2>
                <h2> - Нотаріальне засвідчення перекладів</h2>
                <h2> - Легалізація та апостиль:</h2>
                <ul>
                  <li>Документи видані органами РАЦС (свідоцтво про народження, шлюб, розлучення, смерть, зміну імені або  прізвища і т.д.)</li>
                  <li>Витяг з Державного реєстру та судове рішення</li>
                  <li>Документи видані нотаріальною конторою (заяви, доручення, і т.д.)</li>
                  <li>Документи про освіту (свідоцтво про неповну середню освіту, атестат, диплом бакалавра, диплом спеціаліста,  дипломи магістра і додатки до них)</li>
                  <li>Довідки з місця навчання та навчальні плани</li>
                  <li>Академічні програми та виписки оцінок</li>
                  <li>Довідки про несудимість</li>
                </ul>
              </div>
            </div>
          </b-tab>


          <b-tab title="Подобова оренда квартири" active>

            <div>
              <b-carousel id="carousel1"
                          style="text-shadow: 1px 1px 2px #333;"
                          controls
                          indicators
                          background="#ababab"
                          :interval="4000"
                          img-width="960"
                          img-height="500"
                          v-model="slide"
                          @sliding-start="onSlideStart"
                          @sliding-end="onSlideEnd"
              >
                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app1.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app2.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app3.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app4.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app5.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app6.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app7.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app8.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app9.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app10.jpg" alt="image slot">
                </b-carousel-slide>

                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" min-width="960" max-height="500"
                       src="../assets/img/rent_app/app11.jpg" alt="image slot">
                </b-carousel-slide>
              </b-carousel>

              <div class="content-translate">
                <div class="content-translate_title">
                  <h2>Подобова оренда кварти</h2>
                </div>
                <div class="content-translate_description">
                  <ul>
                    <li>Комфортні умови перебування.</li>
                    <li>Квартира знаходиться близько центру, неподалік будинку РДА за адресою: вул. Стебельського (колишня Шопена) 5.</li>
                    <li>За деталями та бронюванням звертатися за телефоном: 067 74 33 530</li>
                  </ul>
                </div>
              </div>

            </div>

          </b-tab>
        </b-tabs>
      </div>
    </section>
  </div>


</template>

<script>

  export default {
    data: function () {
      return {
        show: false,
        showInsurance: false,
      }
      },
      methods: {
        onSlideStart (slide) {
          this.sliding = true
        },
        onSlideEnd (slide) {
          this.sliding = false
        }
      }
  }
</script>

<style>
  .content{
    width: 100%;
    background: url("../assets/img/beach.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 10rem 0;

  }
  .features-description{
    display: flex;
    justify-content: center;
  h1{
    text-align: center;
    margin: .625rem auto;
    color: #fff;
    padding: .625rem;
    background: rgba(0, 0, 0, .3);
    font-size: 2rem;
    display: inline-block;
    border-radius: 10px;
  }
  }

  .nav-item a {
    color: #fff;
    margin-bottom: 5px;
    &:hover{
       background: rgba(0, 0, 0, 0.3);
     }
  }


  .study{
    border-radius: 10px;
    border: solid 1px #fff;
    overflow: hidden;
    h2{
      color: #fff;
      background: #17a2b8;
      padding: .625rem;
      font-size: 1rem;
    }
  }

  .course-description{
    background: #fff;
    padding: .625rem;
  }

  .TMM{
    background: #f8f9fa;
    border-radius: 10px;
  }

  .tmm-title-block{
    background: #650360;
    padding:  0.625rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-around;
    max-height: 100px;
    color: #fff;
  }

  .tmm-title-block_description{
    flex-grow: 2;
    text-align: center;
  }

  .tmm-description-block{
    padding: .625rem;

    p {
      margin-bottom: 20px;
    }

    .tmm-btn {
      border-radius: 20px;
      font-family: Ubuntu-Bold, sans-serif;
      color: #ffffff;
      background: #650360;
      padding: 10px 20px 10px 20px;
      text-decoration: none;
    }

  .tmm-btn:hover {
    background: #990592;
    text-decoration: none;
  }

  }

  .mb-1 p{
    margin-bottom: 10px;
  }

  #accordion4 p:nth-child(3), #accordion4 p:nth-child(4), #accordion4 p:nth-child(5){
    list-style-type: circle;
  }

  .tickets, .insurance{
    border: solid 1px #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, .1);
  }

  .ticket-img{
    background: url("../assets/img/sign.jpg");
    width: 280px;
    height: 240px;
  }
  .insurance-img{
    background: url("../assets/img/insurance.jpg");
    width: 280px;
    height: 280px;
    margin-right: 10px;
  }


  .ticket-img, .insurance-img{
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 6px;
  }

  .tickets-description_item, .insurance-description_item {
    font-size: .75rem;
    text-transform: uppercase;
    padding: 5px 5px 5px 10px;
    border-radius: 10px;
    font-family: SegoeUI-Bold, sans-serif;
    &:nth-child(odd){
         background: #99ffd6;
         color: #3c763d;
       }
    &:nth-child(even){
       background: #86c5f9;
       color: #31708f;
   }
  }

  .tickets-description_item{
    margin-bottom: 20px;
  }

  .insurance-description_item{
    margin-bottom: 10px;
  }
.content-translate{
  border: solid #25f75d;
  border-radius: 0px 10px 10px 0px;
  border-width: 1px 1px 1px 10px;
  margin-bottom: 1.25rem;
  h2{
    font-family: Ubuntu-Bold, sans-serif;
    font-size: 1rem;
    margin: .625rem 0;
  }
}

  .content-translate_title{
    background: #007bff;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }
  .content-translate_description{
    background: #f4f4f4;
    line-height: 2rem;
    padding: 1rem;
    li{
      text-indent: 1rem;
    &:before{
       content: " • ";
     }
    }
  }


</style>
