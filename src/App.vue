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
};
</script>
