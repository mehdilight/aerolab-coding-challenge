<script setup>
import Layout from './components/Layout.vue';
import SortHeader from './modules/home/SortHeader.vue';


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
    <section class="container">
      <SortHeader />
    </section>
  </Layout>
</template>
