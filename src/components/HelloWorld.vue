<template>
  <div class="container">
    <div class="progress">
      <div class="determinate" :style="progressWidth"></div>
    </div>
    <div class="hello">
      <div class="row">
        <form   class="col s12"
                v-if="!showForm"
                @submit.prevent="showForm = true">
          <div class="row">
            <div class="input-field col s12"
                 v-for="(item, index) in info"
                 :key="index">
              <input
                      class="validate"
                      :id=item.name
                      type="text"
                      :value="item.value"
                      @input="onInput(index ,$event.target.value)">
              <label
                      :for=item.name >{{item.name}}
                <i v-if="controls[index].activated"
                   :class="[`fa-${controls[index].error ? 'exclamation' : 'check'}-circle`, controls[index].error ? 'red-text' : 'green-text']"
                   class="fas">
                </i>
              </label>
            </div>
          </div>
          <div class="row">
            <button class="waves-effect waves-light btn" :disabled="done < info.length">Send data</button>
          </div>
        </form>
        <table v-else>
          <tbody>
          <tr
                v-for="(item, index) in info"
                :key="index">
            <td><b>{{item.name}}</b></td>
            <td>{{item.value}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  index: 'TestVue',
  props: {
    msg: String
  },
  data: function () {
      return {
          info: [
              {
                  name: 'Name',
                  value: '',
                  pattern: /^[a-zA-Z]{2,30}$/,
              },
              {
                  name: 'Phone',
                  value: '',
                  pattern: /^[0-9]{7,14}$/,
              },
              {
                  name: 'Email',
                  value: '',
                  pattern: /.+/,
              },
              {
                  name: 'Some Field',
                  value: '',
                  pattern: /.+/,
              },
          ],
          controls: [],
          showForm: false,
      }
  },
  beforeMount() {
    for(let i = 0; i < this.info.length; i++) {
        this.controls.push({
            error: true,
            activated: false
        })
    }
  },
    computed: {
        done() {
            let done = 0;
            for (let i = 0; i < this.controls.length; i++) {
                (!this.controls[i].error) ? done++ : '';
            }
            return done
        },
        progressWidth() {
            return {
                width: (this.done / this.info.length * 100 ) + '%'
            }
        }
  },
  methods: {
     onInput (index, value) {
         let data = this.info[index];
         let control = this.controls[index];

         data.value = value;
         control.error = !data.pattern.test(value);
         this.controls[index].activated = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
