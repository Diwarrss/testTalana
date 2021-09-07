<template>
  <b-card
    :title="product.name"
    :img-src="product.photo"
    :img-alt="product.name"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2 card-product"
  >
    <span class="title-stock">
      {{ product.stock === 0 ? 'Sin Stock' : 'Disponible' }}
    </span>
    <b-card-text>
      {{ product.price | moneyFormatter }}
    </b-card-text>
    <NumberInputSpinner
      v-model="quantity"
      :min="1"
      :max="product.stock"
      class="w-50"
    />
    <b-button
      variant="primary"
      :disabled="product.stock === 0"
      class="ml-3"
      @click="addToCar(product, quantity)"
    >
      <i class="fas fa-cart-plus"></i
    ></b-button>
  </b-card>
</template>
<script>
import NumberInputSpinner from 'vue-number-input-spinner'
export default {
  components: {
    NumberInputSpinner,
  },
  props: {
    product: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      quantity: 1,
    }
  },
  created() {
    this.quantity = this.product.stock === 0 ? 0 : 1
  },
  methods: {
    addToCar(product, quantity) {
      const item = { ...product, quantity }
      this.$store.dispatch('localStorage/ADD_TO_CAR', item)
    },
  },
}
</script>
<style lang="scss">
.card-product {
  .title-stock {
    position: absolute;
    top: 170px;
    background: gray;
    padding: 5px 10px;
    color: white;
    border-radius: 10px;
    font-weight: bold;
  }
}
</style>
