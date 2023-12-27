<script setup>
import Navbar from './Navbar.vue'
import FlashMessage from './FlashMessage.vue';
</script>

<template>
  <div>
    <Navbar />
    <FlashMessage />
    <main>
      <slot></slot>
    </main>
  </div>
</template>
