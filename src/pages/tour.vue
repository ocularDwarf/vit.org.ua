<template>
  <div class="tour">
    <div class="tour-title"  :style="{background: `url(${linkName})`}">
      <div class="tour-title-description" v-for="tourItem in tour">
        <h1>{{tourItem.title}}</h1>
        <span>Днів у турі {{tourItem.days}}</span>
      </div>
    </div>
    <div class="container">
      <div class="tour-description" v-for="tourItem in tour" :key="index">
        <div class="date">
         <div class="date-item">
            <span>Січень</span>
            <span>{{tourItem.junuary}}</span>
          </div>
         <div class="date-item">
            <span>Лютий</span>
            <span>{{tourItem.february}}</span>
          </div>
         <div class="date-item">
            <span>Березень</span>
            <span>{{tourItem.march}}</span>
          </div>
         <div class="date-item">
            <span>Квітень</span>
            <span>{{tourItem.aplril}}</span>
          </div>
         <div class="date-item">
            <span>Травень</span>
            <span>{{tourItem.may}}</span>
          </div>
         <div class="date-item">
            <span>Червень</span>
            <span>{{tourItem.june}}</span>
          </div>
         <div class="date-item">
            <span>Липень</span>
            <span>{{tourItem.july}}</span>
          </div>
         <div class="date-item">
            <span>Серпень</span>
            <span>{{tourItem.august}}</span>
          </div>
         <div class="date-item">
            <span>Вересень</span>
            <span>{{tourItem.september}}</span>
          </div>
         <div class="date-item">
            <span>Жовтень</span>
            <span>{{tourItem.october}}</span>
          </div>
         <div class="date-item">
            <span>Листопад</span>
            <span>{{tourItem.november}}</span>
          </div>
         <div class="date-item">
            <span>Грудень</span>
            <span>{{tourItem.march}}</span>
          </div>
          </div>
        <div class="route">
          <div class="route-icon"></div>
          <span>{{tourItem.cities}}</span>
        </div>
        <h2 class="bonus">{{tourItem.bonus}}</h2>

        <div v-html="`${tourItem.description}`" class="tour-main-text"></div>


    </div>
  </div>

        </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        linkName: "./../../static/img/bgCountry/" + this.$route.params.name + ".jpg",
       tour: []
      };
    },
    mounted(){
      this.countryName = this.$route.params.name
      let num = this.$route.params.id
      let name = this.$route.params.name
      axios.get("https://api.mlab.com/api/1/databases/vit-org/collections/" + name + "?q={'tour' : '" + num + "'}&apiKey=ff4XqWD3OIG28AGN4k3vuKvu4QnAD1II")
        .then((response) => {
          this.tour = response.data;
          console.log(response.data);

        })
        .catch(e, function () {
          this.errors.push(e)
        })

    }
  };
</script>

<style>
  .tour-title{
    position: relative;
    height: 500px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover !important;
  }

  .tour-title-description{
    position: absolute;
    z-index: 2;
    color: #fff;
    text-align: center;
    text-shadow: 0 2px 2px rgba(0,0,0,0.5);
    font-family: "DejaVu Sans", sans-serif;
    text-transform: uppercase;
    h1, span{
      padding: .625rem;
      background: rgba(0, 0, 0,  0.3);
      border-radius: 20px;
      margin: 1rem;
    }
  }

  .tour-description{
    background: #fff;
    border-top: solid 4px #47a0ff;
    border-bottom: solid 4px #47a0ff;
    width: 100%;
    margin-bottom: 5rem;
    margin-top: -10rem;
    box-shadow: 3px 5px 8px #000000;
    border-radius: 6px;
    padding: 1.25rem;
  }

  .date{
    display: flex;
    justify-content: space-around;
    border-bottom: solid 2px #47a0ff;
  }
  .date-item{
    display: flex;
    flex: 0;

    flex-direction: column;
    text-align: center;
    span{
      &:nth-child(odd){
         color: #fff;
         background: #01cb68;
          padding: 10px;
       }
       &:nth-child(even){
          color: #01cb68;
          padding: 10px;
        }
    }
  }

  .route{
    margin-top: 1.25rem;
    justify-content: center;
    display: flex;
    flex: 0;
  .route-icon{
    background: url("../assets/img/icons/distance.svg");
    background-size: cover;
    width: 32px;
    height: 32px;
    padding: 0.625rem;
  }
  span {
    padding: 0.625rem;
  }
  }

  .bonus{
    font-size: 1.25rem;
    background: rgba(1, 203, 104, 1);;
    text-align: center;
    border-radius: 20px;
    padding: .625rem;
    color: #fff;
  }
.tour-main-text{
  font-size: .75rem;
  h1{
    font-size: 1.25rem;
    margin: 20px;
  }
}


</style>
