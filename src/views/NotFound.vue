<template>
  <div class="notFound">
    <h1 class="notFound__texto">404</h1>
    <p class="notFound__parrafo">Página no encontrada</p>
    <router-link to="/" class="btn btn-outline-light mt-5">Volver</router-link>
  </div>
</template>

<script>
export default {
  name: 'noFound-comp'
}
</script>

<style>
.notFound{
  text-align: center;
  height: 93vh;
  color: white;
}
.notFound__texto{
  font-weight: bolder;
  font-size: 20rem;
}
.notFound__parrafo{
  font-weight: bold;
  font-size:2rem;
}
</style>