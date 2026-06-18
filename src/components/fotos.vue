<script setup>
// استدعاء الصور محلياً من مجلد assets/images لضمان عملها بدون إنترنت
const slide1 = new URL('../assets/images/Photo1.jpg', import.meta.url).href
const slide2 = new URL('../assets/images/Photo2.jpg', import.meta.url).href
const slide3 = new URL('../assets/images/Photo3.jfif', import.meta.url).href
</script>

<template>
  <div id="barberitosCarousel" class="carousel slide carousel-fade shadow-lg" data-bs-ride="carousel" data-bs-interval="4000">
    
    <!-- المؤشرات السفلية -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#barberitosCarousel" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#barberitosCarousel" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#barberitosCarousel" data-bs-slide-to="2"></button>
    </div>

    <!-- محتوى السلايدر بالصور المحلية -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="slide1" class="d-block w-100 carousel-img" alt="Klassiek Knippen & Styling">
        <div class="carousel-caption bg-black bg-opacity-75 rounded p-4 border border-secondary text-start start-50 translate-middle-x w-75 style-caption">
          <h3 class="text-warning fw-bold animated-title">Klassiek Knippen & Styling</h3>
          <p class="text-white mb-0 d-none d-sm-block">Pure precisie, traditioneel vakmanschap en stijl op maat voor de moderne man.</p>
        </div>
      </div>

      <div class="carousel-item">
        <img :src="slide2" class="d-block w-100 carousel-img" alt="Scheren met Open Mes">
        <div class="carousel-caption bg-black bg-opacity-75 rounded p-4 border border-secondary text-start start-50 translate-middle-x w-75 style-caption">
          <h3 class="text-warning fw-bold animated-title">Scheren met Open Mes</h3>
          <p class="text-white mb-0 d-none d-sm-block">Ervaar de ultieme, ontspannende en authentieke hot towel shave behandeling.</p>
        </div>
      </div>

      <div class="carousel-item">
        <img :src="slide3" class="d-block w-100 carousel-img" alt="Exclusieve Baardverzorging">
        <div class="carousel-caption bg-black bg-opacity-75 rounded p-4 border border-secondary text-start start-50 translate-middle-x w-75 style-caption">
          <h3 class="text-warning fw-bold animated-title">Exclusieve Baardverzorging</h3>
          <p class="text-white mb-0 d-none d-sm-block">Perfect symmetrische contouren en professionele verzorging voor uw baard.</p>
        </div>
      </div>
    </div>

    <!-- أزرار التحكم -->
    <button class="carousel-control-prev" type="button" data-bs-target="#barberitosCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#barberitosCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>
