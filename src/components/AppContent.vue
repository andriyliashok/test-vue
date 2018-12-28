<template>
  <div class="container">
    <div class="progress">
      <div class="determinate"></div>
    </div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <app-input v-for="(item, index) in info"
                     :name="item.name"
                     :value="item.value"
                     :pattern="item.pattern"
                     :key="index"
                     @update:value="onChangeValue(index, $event)"
                     @changeStatus="onChangeStatus(index, $event)"
          ></app-input>
        </div>
        <div class="row">
          <button class="waves-effect waves-light btn">
            Send data
          </button>
        </div>
      </form>
      <div>
        <div class="row">
          <table>
            <tbody>
            <tr v-for="(item, index) in info"
                :key="index">
              <td><b>{{item.name}}</b></td>
              <td>{{item.value}}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <button type="button" class="waves-effect waves-light btn">
            Back
          </button>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppInput from '../components/AppInput'

export default {
  name: 'app-component',
  components: {
    AppInput,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'info',
    ]),
  },
  methods: {
    onChangeValue(index, value) {
      this.$store.commit('setInfoValue', {
        index,
        value,
      });
    },
    onChangeStatus(index, isValid) {
      this.$store.commit('setInfoStatus', {
        index,
        isValid,
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
