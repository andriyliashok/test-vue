<template>
  <div class="container">
    <form @submit.prevent="sendData" v-if="!formSubmited">
      <div class="progress">
        <div class="determinate" :style="progressWidth()"></div>
      </div>
      <div class="row">
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
            <span v-if="!formProccess">Send data</span>
            <span v-if="formProccess">Pending...</span>
          </button>
        </div>
      </div>
    </form>
    <div v-else>
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
      'filledField',
      'formProccess',
      'formSubmited',
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
    progressWidth() {
      return {
        width: `${(this.filledField / this.info.length * 100)}%`,
      };
    },
    sendData() {
      this.$store.dispatch('formSubmit');
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
