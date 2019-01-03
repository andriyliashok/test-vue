<template>
  <div class="container">
    <div class="content pb-4">
      <section class="b_events_block w-100">
        <h2 class="h2">Events</h2>
        <div class="events_selected_category">
          <label>Category:</label><span class="category_item">All</span>
        </div>
        <div class="events_block">
          <paginate name="events"
                    :list="events"
                    :per="16">
            <event-item v-for="event in paginated('events')"
                        :poster="event.poster_big"
                        :category="event.category"
                        :name="event.name"
                        :totalPeople="event.total_people"
                        :fromCityCount="event.from_city_count"
                        :FriendsCount="event.friends_count"
                        :date="event.when"
                        :city="event.city"
                        :key="event.event_id">
            </event-item>
          </paginate>
          <div class="events_bottom">
            <div class="bottom_item"></div>
            <div class="bottom_item">
              <paginate-links v-if="showPagination" for="events"
                              :limit="3"
                              :show-step-links="true"
                              class="b_pagination">
              </paginate-links>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import EventItem from './EventItem';

const axios = require('axios');

const GetEventList = 'https://api.myjson.com/bins/hatho';

export default {
  name: 'event-list',
  components: {
    EventItem,
  },
  data() {
    return {
      events: [],
      paginate: ['events'],
      eventLength: 16,
    };
  },
  mounted() {
    axios
      .get(GetEventList)
      .then(response => this.events = response.data.events);
  },
  computed: {
    showPagination() {
      return (this.events.length > this.eventLength);
    },
  },
  methods: {},
};
</script>

<style>
  .b_pagination .left-arrow a,
  .b_pagination .right-arrow a {
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }

  .b_pagination .left-arrow a {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='SVGDoc' width='10' height='15' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 10 15'%3E%3Cdefs%3E%3Cpath d='M681.90156,3501.4l-6.9,-6.9l6.9,-6.9' id='Path-0'/%3E%3C/defs%3E%3Cg transform='matrix%281,0,0,1,-673,-3487%29'%3E%3Cg%3E%3Cuse xlink:href='%23Path-0' fill-opacity='0' fill='%23ffffff' stroke-dashoffset='0' stroke-linejoin='miter' stroke-linecap='butt' stroke-opacity='1' stroke='%23303a43' stroke-miterlimit='50' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .b_pagination .right-arrow a {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='SVGDoc' width='10' height='15' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 10 15'%3E%3Cdefs%3E%3Cpath d='M1256.00159,3487.6l6.89996,6.9l-6.89996,6.9' id='Path-0'/%3E%3C/defs%3E%3Cg transform='matrix%281,0,0,1,-1255,-3487%29'%3E%3Cg%3E%3Cuse xlink:href='%23Path-0' fill-opacity='0' fill='%23ffffff' stroke-dashoffset='0' stroke-linejoin='miter' stroke-linecap='butt' stroke-opacity='1' stroke='%23303a43' stroke-miterlimit='50' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .b_pagination .number,
  .b_pagination .ellipses,
  .b_pagination .left-arrow,
  .b_pagination .right-arrow {
    display: inline-block;
    vertical-align: middle;
  }
  .b_pagination .number a,
  .b_pagination .ellipses a {
    width: 30px;
    height: 30px;
    color: #212121;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    display: block;
    text-align: center;
    border-radius: 6px;
    border: 1px solid transparent;
    padding: 8px 0 0;
    cursor: pointer;
  }
  .b_pagination .number.active a,
  .b_pagination .number:hover a{
    border-color: #e9e9e9;
  }
</style>
