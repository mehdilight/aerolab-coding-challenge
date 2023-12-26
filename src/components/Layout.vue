<script setup>
import Navbar from "./Navbar.vue"
</script>

<template>
  <div>
    <Navbar></Navbar>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
