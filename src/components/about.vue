<script setup>
// قراءة صورة الصالون الكلاسيكية محلياً من جهازكِ
const aboutImg = new URL('../assets/images/Photo5.jfif', import.meta.url).href
</script>

<template>
  <section class="about py-5 bg-dark text-white">
    <div class="container">
      <div class="row align-items-center g-5">
        
        <div class="col-lg-7 about-content">
          <h1 class="display-4 fw-bold text-warning mb-4">Over Barbershop Barberitos</h1>
          <p class="lead text-light mb-4">
            Barberitos is een authentieke herensalon waar puur vakmanschap, traditie en moderne stijl samenkomen. Opgericht door meesterbarbier <strong>Ferdinand Shavette</strong>, dragen wij het ambacht van het herenkappersvak met trots en precisie uit.
          </p>
          <p class="text-muted mb-4">
            Onze barbershop is ingericht met een knipoog naar het verleden: klassieke retro stoelen, de geur van premium pomade en een ontspannen sfeer. Bij Barberitos nemen we de tijd voor elke man.
          </p>
          <div class="p-3 bg-black rounded border border-secondary mb-4">
            <p class="text-warning mb-0 fw-semibold">✨ Ervaar de ultieme verzorging onder het genot van een goede kop koffie of een premium whisky.</p>
          </div>
          <router-link to="/onzeKappar" class="btn btn-warning fw-bold px-4 py-2.5 rounded-pill shadow-sm">Ontmoet Onze Barbiers →</router-link>
        </div>

        <!-- عرض الصورة المحلية هنا -->
        <div class="col-lg-5">
          <div class="position-relative">
            <img :src="aboutImg" class="img-fluid rounded-3 shadow-lg border border-secondary w-100" alt="Barberitos Ambacht" style="height: 400px; object-fit: cover;">
            <div class="position-absolute bottom-0 start-0 bg-warning text-dark fw-bold px-3 py-2 m-3 rounded shadow">Sinds 1982</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
