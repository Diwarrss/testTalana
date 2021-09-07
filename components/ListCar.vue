<template>
  <div>
    <h5>Resumen de compra</h5>
    <b-table :items="listCar" :fields="fields" striped responsive="sm">
    </b-table>
    <div class="value-subtotal d-flex justify-content-end">
      <span class="font-weight-bold mr-5">Sub-total</span>
      <span>{{priceSubTotal.cant}}</span>
      <span class="font-weight-bold ml-5 mr-4">{{priceSubTotal.subtotal | moneyFormatter }}</span>
    </div>
  </div>
</template>
<script>
import currency from 'currency.js'
export default {
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Nombre Producto',
        },
        {
          key: 'quantity',
          label: 'Cantidad',
        },
        {
          key: 'price',
          label: 'Sub-total',
          formatter: (price, key, item) => {
            const subtotal = currency(price * item.quantity, {
              symbol: '$',
              precision: 0,
              formatWithSymbol: true,
              separator: '.',
              decimal: ',',
            }).format()
            return subtotal
          },
        },
      ],
    }
  },
  computed: {
    listCar() {
      return this.$store.state.localStorage.listCar
    },
    priceSubTotal() {
      const orders = this.$store.state.localStorage.listCar
      const subtotal = orders.reduce(
        (sum, value) =>
          typeof value.price === 'number'
            ? sum + value.price * value.quantity
            : sum,
        0
      )
      const cant = orders.reduce(
        (sum, value) =>
          typeof value.quantity === 'number' ? sum + value.quantity : sum,
        0
      )
      return {
        subtotal,
        cant,
      }
    },
  },
}
</script>
