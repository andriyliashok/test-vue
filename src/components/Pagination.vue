<template>
  <div class="b_pagination">
    <paginate
        :pageCount="paginationTotal"
        :containerClass="'pagination-list'"
        :page-class="'p_item'"
        :page-link-class="'p_link'"
        :prev-link-class="'arr_left'"
        :next-link-class="'arr_right'"
        :prev-class="'p_item'"
        :next-class="'p_item'"
        :margin-pages="2"
        :clickHandler="paginationOffset"
    ></paginate>
  </div>
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
  .b_pagination li.active a{
    border-color: #e9e9e9;
  }
</style>
