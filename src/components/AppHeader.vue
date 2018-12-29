<template>
  <div class="container">
    <h1>My site</h1>
    <h5 v-if="formSubmited">Hello {{info[0].value}}</h5>
    <hr>
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
      'info',
      'formSubmited',
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
