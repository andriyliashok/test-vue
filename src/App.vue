<template>
  <div id="app">
      <EventList
          :limit="16"
      ></EventList>
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
