<template>
  <div class="container">
    <h1 class="text-center m-3">Lista de Juegos Disponibles</h1>
    <div class="row">
      <div class="col-12 col-md-4" v-for="(game, index) in games" :key="index">
        <div class="box">
          <div class="card">
            <div class="card_imagen">
              <img :src="game.background_image" class="card_img_top" alt="">
            <div class="card_body">
              <h5 class="card_title">{{game.name}}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Rating:</b> {{game.rating}} ⭐️</li>
              <li class="list-group-item"><b>Lanzamiento:</b> <br> <small><i class="bi bi-calendar3"></i></small> {{game.released}}</li>
              <li class="list-group-item"><b>Actualización:</b> <br><small><i class="bi bi-calendar-plus"></i></small> {{game.updated}}</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  </div>
  </div>
  </template>

  <script>
import axios from "axios";

export default {
  name: "home-comp",
  data: function () {
    return {
      games: [],
    };
  },
  methods: {
    getData() {
      let apiKey = "key=de294bb09054413cb1d75970171acf08";
      axios
        .get(`https://api.rawg.io/api/games?${apiKey}`)
        .then((response) => {
          let { results } = response.data;
          this.games = results.map((game) => ({
            ...game,
            released: this.dateReleased(game.released),
            updated: this.dateUpdated(game.updated),
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    
    dateUpdated(date) {
      return new Date(date).toLocaleString("es-CL");
    },
    dateReleased(date) {
      return new Date(date).toLocaleDateString("es-CL");
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.card:hover{
  box-shadow: 0 0.3rem .5rem gray;
}
.card_img_top{
  height: 8rem;
  object-fit: cover;
}
.card-body__name{
  height: 6rem;
  text-align: center;
}
.click:hover{
  cursor: pointer;
  text-shadow: 0 0 .1rem gray;
}

</style>