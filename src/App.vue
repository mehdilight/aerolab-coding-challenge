<script setup>
import Layout from './components/Layout.vue';
import SortHeader from './modules/home/SortHeader.vue';
import ProductCard from './modules/home/ProductCard.vue';
import useProducts from './composables/useProducts';
import useUser from './composables/useUser';

import { onMounted } from 'vue';


const {isProductsLoading, products, fetch: fetchProducts} = useProducts();
const {fetch: fetchUser} = useUser();

onMounted(async () => {
  fetchProducts();
  fetchUser()
})
</script>

<template>
  <Layout>
    <section class="hero">
      <div class="container">
        <h1 class="hero__heading">
          Electronics
        </h1>
      </div>
    </section>
    <div v-if="isProductsLoading">
      loading ...
    </div>
    <section v-else class="container">
      <SortHeader />
      <section class="products-grid">
        <ProductCard v-for="product in products" :product="product" :key="product._id" />
      </section>
    </section>
  </Layout>
</template>
