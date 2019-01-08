<template>
    <div class="main">
        <div class="container">
            <div class="content pb-4">
                <section class="b_events_block w-100">
                    <h2 class="h2">Events</h2>
                    <div class="events_selected_category">
                        <label>Category:</label><span class="category_item">All</span>
                    </div>
                    <div v-if="total > 0" class="events_block">
                        <EventItem
                            v-for="event in events"
                            :event="event"
                            :key="event.event_id"
                        ></EventItem>
                        <div class="events_bottom">
                            <div class="bottom_item"></div>
                            <div class="bottom_item">
                                <Pagination
                                    v-if="total > limit"
                                    :options="{ limit, total }"
                                    @paginationOffset="setPaginationOffset"
                                ></Pagination>
                            </div>
                        </div>
                    </div>
                    <h2 v-else>No events</h2>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import EventItem from './EventItem';
import Pagination from './Pagination';

const axios = require('axios');

const GetEventList = 'https://api.myjson.com/bins/hatho';

export default {
  name: 'event-list',
  props: {
    limit: Number,
    options: Object,
  },
  components: {
    EventItem,
    Pagination,
  },
  data() {
    return {
      events: [],
      offset: 0,
      total: null,
    };
  },
  methods: {
    getEvents() {
      axios
        .get(GetEventList,
          {
            params: {
              limit: this.limit,
              offset: this.offset,
              ...this.options,
            },
          })
        .then(({ data }) => {
          this.events = data.events;
          this.total = data.total;
        })
        .catch(console.log);
    },
    setPaginationOffset(offset) {
      this.offset = offset;
      this.getEvents();
    },
  },
  created() {
    this.getEvents();
  },
};
</script>
