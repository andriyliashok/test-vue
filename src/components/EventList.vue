<template>
    <div class="main">
        <div class="container">
            <div class="content pb-4">
                <section class="b_events_block w-100">
                    <h2 class="h2">Events</h2>
                    <div class="events_selected_category">
                        <label>Category:</label><span class="category_item">All</span>
                    </div>
                    <div class="events_block" ref="layout">
                        <event-item v-for="event in events"
                                    :event="event"
                                    :key="event.event_id">
                        </event-item>
                        <div class="events_bottom">
                            <div class="bottom_item"></div>
                            <div class="bottom_item">
                                <pagination v-if="events.length && total > limit"
                                            :limit="limit"
                                            :total="total"
                                            @getPaginationOffset="getPaginationOffset">
                                </pagination>
                            </div>
                        </div>
                    </div>
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
  components: {
    EventItem,
    Pagination,
  },
  data() {
    return {
      events: [],
      limit: 16,
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
            },
          })
        .then((response) => {
          this.events = response.data.events;
          this.total = response.data.total;
        })
        .catch((response) => {
          console.log(response);
        });
    },
    getPaginationOffset(offset) {
      this.offset = offset;
    },
  },
  created() {
    this.getEvents();
  },
  watch: {
    offset() {
      this.getEvents();
    },
  },
};
</script>
