import Vue from 'vue'
import currency from 'currency.js'
export const moneyFormatter = value =>
currency(value, {
  symbol: '$',
  precision: 0,
  formatWithSymbol: true,
  separator: '.',
  decimal: ','
}).format()

Vue.filter('moneyFormatter', moneyFormatter)
