<template>
  <div class="b_events_block_item">
    <div class="img">
      <a :style="`background-image: url('${event.poster_big}')`"
         href="#"
         class="img_wrapper"
      ></a>
      <a class="icon_like" href="#"></a>
    </div>
    <div class="item_content">
      <div class="item_top"><a class="btn_category" href="#">{{event.category}}</a>
        <div class="item_price">free</div>
      </div>
      <a class="_title" href="#">{{event.name}}</a>
      <div class="item_info">
        <div class="info_item">
          <a href="#">visitors: <span>{{event.friends_count}}</span></a>
        </div>
        <div class="info_item">
          <a href="#">from my city: <span>{{event.friends_count}}</span></a>
        </div>
        <div class="info_item">
          <a href="#">friends: <span>{{event.friends_count}}</span></a>
        </div>
      </div>
      <div class="item_bottom">
        <div class="bottom_left">
          <div class="date">{{event.when | moment("MM.DD.YY")}}</div>
          <div class="time">{{event.when | moment("h:mm")}}</div>
        </div>
        <div class="bottom_right"><a class="city" href="#">{{event.city}}</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-item',
  props: ['event'],
};
</script>
