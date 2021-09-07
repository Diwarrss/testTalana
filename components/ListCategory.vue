<template>
  <b-col md="3">
    <h3 class="text-center">Categorías</h3>
    <b-list-group>
      <b-list-group-item
        button
        :class="'Todas' === selectedCategory.name ? 'active' : null"
        @click.prevent="checkCategory({ name: 'Todas' })"
        >Todas
      </b-list-group-item>
      <b-list-group-item
        v-for="(category, index) in categories"
        :key="index"
        button
        :class="category.name === selectedCategory.name ? 'active' : null"
        @click.prevent="checkCategory(category)"
        >{{ category.name }}
      </b-list-group-item>
    </b-list-group>
  </b-col>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      idCategory: null,
    }
  },
  computed: {
    selectedCategory() {
      return this.$store.state.localStorage.selectedCategory
    },
  },
  methods: {
    checkCategory(category) {
      this.$store.dispatch('localStorage/GET_CATEGORY', category)
    },
  },
}
</script>
