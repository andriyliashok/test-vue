<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<app-progress-form></app-progress-form>-->
    <div class="container">
      <app-cart></app-cart>
      <app-product></app-product>
    </div>

  </div>
</template>

<script>
// import AppProgressForm from './components/AppProgressForm'
import AppProduct from './components/AppProduct'
import AppCart from './components/AppCart'

export default {
  name: 'app',
  components: {
    // AppProgressForm,
    AppProduct,
    AppCart,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
