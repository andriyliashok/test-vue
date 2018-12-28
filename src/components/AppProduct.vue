<template>
  <div class="container">
    <h1>Product title</h1>
    <div>Product price: {{price}} $</div>
    <div class="collection">
      <div class="collection-item">
        <button class="waves-effect waves-light btn"
                @click="decrementProduct"
        >-1</button>
        &nbsp;
        <button class="waves-effect waves-light btn"
                @click="incrementProduct"
        >+1</button>
      </div>
      <div class="collection-item">
        <button class="waves-effect waves-light btn"
                @click="onOrder"
                :disabled="isdisabled"
        >Order now</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'price',
      'count',
    ]),
    isdisabled() {
      return this.count <= 0;
    },
  },
  methods: {
    ...mapMutations([
      'incrementProduct',
      'decrementProduct',
    ]),
    onOrder() {
      this.$store.dispatch('sendData', {
        name: this.name,
        phone: this.phone,
      });
    },
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
