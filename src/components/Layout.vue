<script setup>
import Navbar from "./Navbar.vue"
</script>

<template>
  <div>
    <Navbar />
    <main>
      <slot></slot>
    </main>
  </div>
</template>
