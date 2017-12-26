<template>
  <div class="country-list">
    <div class="title-country" :style="{background: `url(${linkName})`}">
      <ul class="country-description">
        <li v-for="(item, key, index) in collection" :key="index">
          <h1 v-if="item.tour == 1">{{item.country}} всі тури</h1>
          <p v-if="item.tour == 2" v-html="item.country"></p>
        </li>
      </ul>
    </div>

    <div class="container">
      <table>
        <thead>
        <tr>
          <th>Назва туру</th>
          <th>Маршрут</th>
          <th>Днів у подорожі</th>
          <th>Ціна</th>
          <th>Пройти по туру</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(rows, key) in collection" :key="key">
          <td>{{rows.title}}</td>
          <td>{{rows.cities}}</td>
          <td>{{rows.days}}</td>
          <td>Від {{rows.price}}(€)</td>
          <td><router-link :to="{name: 'tour', params: {id: rows.tour}}" class="tour" :key="key">Датальніше</router-link> </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data (){
      return{
        countryName: "",
        linkName: "./../../static/img/bgCountry/" + this.$route.params.name + ".jpg",
        collection: [],
      }
  },
    mounted(){
        this.countryName = this.$route.params.name
      axios.get("https://api.mlab.com/api/1/databases/vit-org/collections/" + this.$route.params.name + "?apiKey=ff4XqWD3OIG28AGN4k3vuKvu4QnAD1II")
        .then((response) => {
          this.collection = response.data;
        })
        .catch(e =>  {
          this.errors.push(e)
        })
    }
  }
</script>

<style>
  .country-list{
    width: 100%;
  }
  .title-country{
    position: relative;
    height: 500px;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-size: cover !important;
  }
  .country-description{
    background: rgba(0, 0, 0, .3);
    position: absolute;
    z-index: 2;
    padding: 2.5rem;
    color: #fff;
    text-align: center;
    font-family: "Segoe UI Historic", sans-serif;
    text-shadow: 0 2px 2px rgba(0,0,0,0.5);
  p{
    margin-bottom: 2.5rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
    h1, h2{
      font-size: 2rem;
      text-shadow: 0 2px 2px rgba(0,0,0,0.2);
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      margin-top: 2.5rem;
    }
  }

  table {
    width: 100%;
    margin-bottom: 2.5rem;
    margin-top: -5rem;
    padding: 0;
    border: 1px solid #141415;
    border-spacing: 0;
    border-collapse: separate;
    border-radius: 5px;
    background-color: #37393c;
    font-size: 12px;
    color: white;
  }

  table th, table td {
    padding: 10px 10px 9px;
    line-height: 18px;
    text-align: left;
  }

  table th {
    padding-top: 9px;
    font-weight: bold;
    vertical-align: middle;
    color: #b6daff;
  }

  table td {
    vertical-align: top;
    border-top: 1px solid #ddd;
  }

  table th+th,table td+td,table th+td {
    border-left: 1px solid #ddd;
  }

  table thead tr:first-child th:first-child, table tbody tr:first-child td:first-child {
    border-radius: 5px 0 0 0;
  }

  table thead tr:first-child th:last-child, table tbody tr:first-child td:last-child {
    border-radius: 0 5px 0 0;
  }

  table tbody tr:last-child td:first-child {
    border-radius: 0 0 0 5px;
  }

  table tbody tr:last-child td:last-child {
    border-radius: 0 0 5px 0;
  }

  table tbody tr:nth-child(odd) td {
    background-color: #323841;
  }

  table tbody tr:hover td {
    background-color: #202223;
    cursor: pointer;
  }


</style>
