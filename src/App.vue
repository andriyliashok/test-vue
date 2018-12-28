<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<app-progress-form></app-progress-form>-->
    <!--<div class="container">-->
      <!--<app-cart></app-cart>-->
      <!--<app-product></app-product>-->
    <!--</div>-->
      <app-header></app-header>
      <app-content></app-content>
  </div>
</template>

<script>
// import AppProgressForm from './components/AppProgressForm'
// import AppProduct from './components/AppProduct'
// import AppCart from './components/AppCart'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

export default {
  name: 'app',
  components: {
    // AppProgressForm,
    // AppProduct,
    // AppCart,
    AppHeader,
    AppContent,
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
