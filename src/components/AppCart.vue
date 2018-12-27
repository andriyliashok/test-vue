<template>
  <div class="container">
    <h1>Cart</h1>
    <div class="collection">
      <div class="collection-item">Amount: {{count}}</div>
      <div class="collection-item">Total: {{total}} $</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'count',
      'total',
    ]),
  },
};
</script>

<style scoped>

  .container {
    max-width: 1000px;
    margin: auto;
  }

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
