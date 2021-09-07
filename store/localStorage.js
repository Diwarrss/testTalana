export const state = () => ({
  products: [],
  categories: [],
  selectedCategory: { name: 'Todas' },
  productsByCategory: [],
  cant: 0,
  listCar: [],
  showListCar: false
})

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data
  },
  SET_CATEGORIES(state, data) {
    state.categories = data
  },
  SET_SELECTED_CATEGORY(state, data) {
    state.selectedCategory = data
  },
  SET_SHOW_LIST_CAR(state, data) {
    state.showListCar = data
  },
  SET_PRODUCTS_CAR(state, data) {
    const product = state.listCar.find(product => product.id === data.id)
    if (product) {
      const cant = product.quantity + data.quantity
      if (cant > data.stock) {
        this._vm.$bvToast.toast(`La cantidad supera al Stock de ${product.stock} disponible!`, {
          title: `Información`,
          variant: 'warning',
          solid: true,
          autoHideDelay: 1000,
          toaster: 'b-toaster-top-center',
        })
      } else {
        product.quantity += data.quantity
        this._vm.$bvToast.toast(`Producto agregado al carrito! Total: ${product.quantity}`, {
          title: `Éxito`,
          variant: 'success',
          solid: true,
          autoHideDelay: 1000,
          toaster: 'b-toaster-top-center',
        })
      }
    } else {
      this._vm.$bvToast.toast('Producto agregado al carrito!', {
        title: `Éxito`,
        variant: 'success',
        solid: true,
        autoHideDelay: 1000,
        toaster: 'b-toaster-top-center',
      })
      state.listCar.push(data)
    }
  }
}

export const actions = {
  GET_CATEGORY({ commit }, category) {
    commit('SET_SELECTED_CATEGORY', category)
  },
  ADD_TO_CAR({ commit }, product) {
    commit('SET_PRODUCTS_CAR', product)
  },
  SHOW_LIST_CAR({ commit }, value) {
    commit('SET_SHOW_LIST_CAR', value)
  }
}

export const getters = {
  productsByCategory: state => category => {
    if (category.name === 'Todas') {
      return state.products
    } else {
      return state.products.filter(product => product.category.id === category.id)
    }
  },
}
