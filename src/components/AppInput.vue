<template>
  <div class="input-field">
    <label :for="name">
      {{name}}
      <i v-if="activated"
         :class="validClass"
         class="fas">
      </i>
    </label>
    <input :id="name" type="text" class="validate"
           :value="value"
           @input="onInput"
    >
  </div>
</template>

<script>
export default {
  name: 'app-input',
  props: ['name', 'value', 'pattern'],
  data() {
    return {
      activated: this.value !== '',
    };
  },
  mounted() {
    this.$emit('changeStatus', this.isValid);
  },
  computed: {
    isValid() {
      return this.pattern.test(this.value);
    },
    validClass() {
      return this.isValid ? 'fa-check-circle green-text' : 'fa-exclamation-circle red-text';
    },
  },
  methods: {
    onInput(e) {
      this.activated = true;
      this.$emit('update:value', e.target.value);
    },
  },
  watch: {
    isValid() {
      this.$emit('changeStatus', this.isValid);
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
