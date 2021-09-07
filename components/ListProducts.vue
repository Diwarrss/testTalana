<template>
  <b-col md="9" class="list-products">
    <b-row>
      <b-col v-if="!products.length">
        <b-alert show variant="warning" class="text-center">
          No tenemos productos de esta categoría
        </b-alert>
      </b-col>
      <b-col v-else>
        <h3>{{$store.state.localStorage.selectedCategory.name}}</h3>
        <b-card-group deck class="justify-content-center mt-5 mb-5">
          <CardProduct
            v-for="(product, index) in products.slice(
              (currentPage - 1) * perPage,
              (currentPage - 1) * perPage + perPage
            )"
            :key="index"
            :product="product"
          />
        </b-card-group>
        <b-row class="justify-content-center">
          <b-pagination
          v-model="currentPage"
          pills
          :total-rows="products.length"
          size="sm"
          :per-page="perPage"
        ></b-pagination>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.products.length
    },
  },
}
</script><style lang="scss">
.list-products {
  .card-img-top {
    height: 200px;
    width: auto;
    object-fit: contain;
  }
}
</style>
