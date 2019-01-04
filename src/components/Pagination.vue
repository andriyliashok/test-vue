<template>
  <paginate
      :pageCount="paginationTotal"
      :containerClass="'b_pagination'"
      :margin-pages="2"
      :clickHandler="paginationOffset"
  ></paginate>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    options: Object,
  },
  computed: {
    paginationTotal() {
      return Math.ceil(+this.options.total / this.options.limit);
    },
  },
  methods: {
    paginationOffset(page) {
      this.$emit('paginationOffset', (page * this.options.limit) - this.options.limit);
    },
  },
};
</script>

<style lang="scss">
  .b_pagination li:first-child a,
  .b_pagination li:last-child a {
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    font-size: 0;
  }
  .b_pagination li:first-child a {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='SVGDoc' width='10' height='15' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 10 15'%3E%3Cdefs%3E%3Cpath d='M681.90156,3501.4l-6.9,-6.9l6.9,-6.9' id='Path-0'/%3E%3C/defs%3E%3Cg transform='matrix%281,0,0,1,-673,-3487%29'%3E%3Cg%3E%3Cuse xlink:href='%23Path-0' fill-opacity='0' fill='%23ffffff' stroke-dashoffset='0' stroke-linejoin='miter' stroke-linecap='butt' stroke-opacity='1' stroke='%23303a43' stroke-miterlimit='50' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .b_pagination li:last-child a {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='SVGDoc' width='10' height='15' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 10 15'%3E%3Cdefs%3E%3Cpath d='M1256.00159,3487.6l6.89996,6.9l-6.89996,6.9' id='Path-0'/%3E%3C/defs%3E%3Cg transform='matrix%281,0,0,1,-1255,-3487%29'%3E%3Cg%3E%3Cuse xlink:href='%23Path-0' fill-opacity='0' fill='%23ffffff' stroke-dashoffset='0' stroke-linejoin='miter' stroke-linecap='butt' stroke-opacity='1' stroke='%23303a43' stroke-miterlimit='50' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .b_pagination li {
    display: inline-block;
    vertical-align: middle;
  }
  .b_pagination li a {
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
  .b_pagination li.active a,
  .b_pagination li:hover a{
    border-color: #e9e9e9;
  }
</style>
