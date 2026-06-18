<script setup>
defineProps({
  image: String,
  title: String,
  description: String
})

const showMessage = () => {
  alert('More candy information coming soon!')
}
</script>

<template>
  <div class="product-card">
    <img :src="image" :alt="title">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <button @click="showMessage">
      View Product
    </button>
  </div>
</template>