<template>
  <b-container fluid>
    <b-row class="pt-4 list-items">
      <ListCategory :categories="categories" class="categories"/>
      <ListProducts :products="products"/>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData({ app, store }) {
    const { data: products } = await app.$axios.get('product')
    const { data: categories } = await app.$axios.get('product-category')
    store.commit('localStorage/SET_PRODUCTS', products)
    store.commit('localStorage/SET_CATEGORIES', categories)
  },
  computed: {
    categories(){
      return this.$store.state.localStorage.categories
    },
    products() {
      return this.$store.getters['localStorage/productsByCategory'](this.$store.state.localStorage.selectedCategory)
    },
  },
}
</script>
<style lang="scss">
  .list-items{
    .categories{
      border-right: 2px solid gray;
      .list-group{
        margin-top: 40px;
        .list-group-item{
          font-weight: bold;
        }
      }
    }
  }
</style>
