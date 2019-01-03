<template>
  <div id="app">
      <event-list></event-list>
  </div>
</template>

<script>
import EventList from './components/EventList'

export default {
  name: 'app',
  components: {
    EventList,
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

</style>
