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
                   :class="[`fa-${controls[index].error ? 'exclamation' : 'check'}-circle`,
                             controls[index].error ? 'red-text' : 'green-text']"
                   class="fas">
                </i>
              </label>
            </div>
          </div>
          <div class="row">
            <button class="waves-effect waves-light btn"
                    :disabled="done < info.length">
                    Send data
            </button>
          </div>
        </form>
        <div v-else>
          <div class="row">
          <table>
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
          <div class="row">
            <button type="button" class="waves-effect waves-light btn"
                    @click="showForm = false">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <form v-if="!sendData"
          @submit.prevent="sendData = true"
    >
      <div v-on:scroll="scrollBottom" id="scroll-block" class="scroll-block">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати
        и вэб-дизайне. Lorem Ipsum является стандартной
        "рыбой" для текстов на латинице с начала XVI века.
        В то время некий безымянный печатник создал большую коллекцию
        размеров и форм шрифтов, используя Lorem Ipsum для
        распечатки образцов. Lorem Ipsum не только успешно пережил без
        заметных изменений пять веков, но и перешагнул в
        электронный дизайн. Его популяризации в новое время послужили
        публикация листов Letraset с образцами Lorem Ipsum
        в 60-х годах и, в более недавнее время, программы электронной
        вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
        Lorem Ipsum - это текст-"рыба", часто используемый в печати
        и вэб-дизайне. Lorem Ipsum является стандартной
        "рыбой" для текстов на латинице с начала XVI века.
        В то время некий безымянный печатник создал большую коллекцию
        размеров и форм шрифтов, используя Lorem Ipsum для
        распечатки образцов. Lorem Ipsum не только успешно пережил без
        заметных изменений пять веков, но и перешагнул в
        электронный дизайн. Его популяризации в новое время послужили
        публикация листов Letraset с образцами Lorem Ipsum
        в 60-х годах и, в более недавнее время, программы электронной
        вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
        Lorem Ipsum - это текст-"рыба", часто используемый в печати
        и вэб-дизайне. Lorem Ipsum является стандартной
        "рыбой" для текстов на латинице с начала XVI века.
        В то время некий безымянный печатник создал большую коллекцию
        размеров и форм шрифтов, используя Lorem Ipsum для
        распечатки образцов. Lorem Ipsum не только успешно пережил без
        заметных изменений пять веков, но и перешагнул в
        электронный дизайн. Его популяризации в новое время послужили
        публикация листов Letraset с образцами Lorem Ipsum
        в 60-х годах и, в более недавнее время, программы электронной
        вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
        Lorem Ipsum - это текст-"рыба", часто используемый в печати
        и вэб-дизайне. Lorem Ipsum является стандартной
        "рыбой" для текстов на латинице с начала XVI века.
        В то время некий безымянный печатник создал большую коллекцию
        размеров и форм шрифтов, используя Lorem Ipsum для
        распечатки образцов. Lorem Ipsum не только успешно пережил без
        заметных изменений пять веков, но и перешагнул в
        электронный дизайн. Его популяризации в новое время послужили
        публикация листов Letraset с образцами Lorem Ipsum
        в 60-х годах и, в более недавнее время, программы электронной
        вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
      </div>
      <div v-if="readText" class="container" style="text-align: left">
        <p>
          <label>
            <input type="checkbox" class="filled-in" v-model="flags.agreeText"/>
            <span>Agree text</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" class="filled-in" v-model="flags.spam"/>
            <span>Send spam</span>
          </label>
        </p>
        <div v-if="flags.spam">
          <p>
            <label>
              <input name="group1" type="radio" value="Phone" v-model="spamType"/>
              <span>On phone</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value="Email" v-model="spamType"/>
              <span>On mail</span>
            </label>
          </p>
        </div>
        <div v-if="flags.agreeText || flags.spam" class="row">
          <button type="submit" class="waves-effect waves-light btn">Send Data</button>
        </div>
      </div>
    </form>
    <table v-else>
      <tbody>
      <tr>
        <td><b>Agree</b></td>
        <td>{{flags.agreeText ? 'yes': 'no'}}</td>
      </tr>
      <tr>
        <td>Send Spam</td>
        <td>{{flags.spam ? 'yes': 'no'}}</td>
      </tr>
      <tr>
        <td>Spam On</td>
        <td>{{spamType}}</td>
      </tr>
      </tbody>
    </table>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  index: 'TestVue',
  props: {
    msg: String,
  },
  data() {
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
      readText: false,
      sendData: false,
      flags: {
        agreeText: false,
        spam: false,
      },
      spamType: 'Phone',
    };
  },
  beforeMount() {
    for (let i = 0; i < this.info.length; i += 1) {
      this.controls.push({
        error: true,
        activated: false,
      });
    }
  },
  computed: {
    done() {
      let done = 0;
      for (let i = 0; i < this.controls.length; i += 1) {
        if (!this.controls[i].error) done += 1;
      }
      return done;
    },
    progressWidth() {
      return {
        width: `${(this.done / this.info.length * 100)}%`,
      };
    },
  },
  methods: {
    onInput(index, value) {
      const data = this.info[index];
      const control = this.controls[index];

      data.value = value;
      control.error = !data.pattern.test(value);
      this.controls[index].activated = true;
    },
    scrollBottom(e) {
      if (e.target.clientHeight + e.target.scrollTop >= e.target.scrollHeight) {
        this.readText = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    max-width: 1000px;
    margin: auto;
  }
  .scroll-block {
    max-height: 300px;
    overflow: auto;
    padding: 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: 1px solid gray;
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
