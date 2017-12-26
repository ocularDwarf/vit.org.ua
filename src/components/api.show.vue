<template>
  <div class="tour">
    <ul>
      <li v-for="(posts, index) in results" :key="index">
        <span>{{posts}}</span>
        <h1>{{posts.title}}</h1>
        <p>{{posts.day1.description}}</p>
      </li>
    </ul>
  </div>
</template>





<script>
  import axios from 'axios'
  const ApiKey = "ff4XqWD3OIG28AGN4k3vuKvu4QnAD1II"
  const DataUrl = "https://api.mlab.com/api/1/databases/vit-org"

  export default {
    data: function () {
      return {
        results: [],
        errors: []
      }
    },
    mounted(){
      axios.get("https://api.mlab.com/api/1/databases/vit-org/collections/albania?q={'tour' : '1'}&apiKey=ff4XqWD3OIG28AGN4k3vuKvu4QnAD1II")
        .then((response) => {
          this.results = response.data;
          console.log(response.data);

        })
        .catch(e, function () {
          this.errors.push(e)
        })

    }
  }

</script>

<style>
  .tour{
    position: absolute;
    width: 100%;
    height: 100%;
    background: gainsboro;
  }
</style>
