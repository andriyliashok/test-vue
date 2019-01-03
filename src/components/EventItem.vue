<template>
  <div class="b_events_block_item">
    <div class="img">
      <a :style="`background-image: url('${poster}')`"
         href="#"
         class="img_wrapper"
      ></a>
      <a class="icon_like" href="#"></a>
    </div>
    <div class="item_content">
      <div class="item_top"><a class="btn_category" href="#">{{category}}</a>
        <div class="item_price">free</div>
      </div>
      <a class="_title" href="#">{{name}}</a>
      <div class="item_info">
        <div class="info_item">
          <a href="#">visitors: <span>{{totalPeople}}</span></a>
        </div>
        <div class="info_item">
          <a href="#">from my city: <span>{{fromCityCount}}</span></a>
        </div>
        <div class="info_item">
          <a href="#">friends: <span>{{FriendsCount}}</span></a>
        </div>
      </div>
      <div class="item_bottom">
        <div class="bottom_left">
          <div class="date">{{date | moment("MM.DD.YY")}}</div>
          <div class="time">18:30</div>
        </div>
        <div class="bottom_right"><a class="city" href="#">{{city}}</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-item',
  props: ['poster', 'category', 'name', 'totalPeople', 'fromCityCount', 'FriendsCount', 'date', 'city'],
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
