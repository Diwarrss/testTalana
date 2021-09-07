<template>
  <div class="main-header">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">LOGOTIPO</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              class="mr-sm-2"
              placeholder="Buscador de Producto y Categorías"
            ></b-form-input>
            <b-button class="my-2 my-sm-0 mr-3" type="submit">Buscar</b-button>
          </b-nav-form>
          <b-list-group>
            <b-list-group-item
              class="
                d-flex
                justify-content-between
                align-items-center
                btn btn-default
              "
              @click.prevent="openListCar(showListCar ? false : true)"
            >
              <i class="fas fa-shopping-cart"></i>
              <b-badge variant="primary" pill>
                {{ cant }}
              </b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div v-if="showListCar" class="modal-list-car">
      <ListCar :list="listCar"/>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    cant() {
      return this.$store.state.localStorage.listCar.length
    },
    showListCar() {
      return this.$store.state.localStorage.showListCar
    },
  },
  methods: {
    openListCar(value) {
      this.$store.dispatch('localStorage/SHOW_LIST_CAR', value)
    }
  },
}
</script>
<style lang="scss">
.main-header {
  .modal-list-car {
    position: absolute;
    right: 0;
    padding: 20px;
    border: 2px solid gray;
    box-shadow: 0 2px 15px rgb(0 0 0 / 50%);
    background: white;
    z-index: 99;
  }
}
</style>
