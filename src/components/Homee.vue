<script setup>
import { ref, computed } from 'vue'

// 1. استيراد المكونات الأساسية المشتركة
import FotosCarousel from './fotos.vue'

// 2. استدعاء صور الأخبار محلياً من مجلد assets/images بجهازكِ لتعمل بدون إنترنت
const newsImg1 = new URL('../assets/images/Photo1.jpg', import.meta.url).href
const newsImg2 = new URL('../assets/images/Photo2.jpg', import.meta.url).href
const newsImg3 = new URL('../assets/images/Photo3.jfif', import.meta.url).href

// 3. مصفوفة الأخبار المحدثة بالصور المحلية لصالون Barberitos
const nieuwsBerichten = ref([
  {
    id: 1,
    titel: 'Nieuwe Authentieke Barbiersstoelen Geïnstalleerd!',
    datum: '15 Juni 2026',
    bericht: 'Vanaf vandaag zit u nog comfortabeler tijdens uw behandeling in onze gloednieuwe, handgemaakte retro Belmont stoelen. Kom langs en ervaar het zelf!',
    afbeelding: newsImg1
  },
  {
    id: 2,
    titel: 'Exclusieve Whisky & Single Malt Avonden',
    datum: '10 Juni 2026',
    bericht: 'Geniet vanaf volgende week elke vrijdagavond van een premium glas single malt whisky tijdens uw uitgebreide baard- en scheerbehandeling volgens oud ambacht.',
    afbeelding: newsImg2
  },
  {
    id: 3,
    titel: 'Introductie: Onze Eigen Premium Baardolie',
    datum: '05 Juni 2026',
    bericht: 'Na maanden testen lanceren wij onze eigen biologische baardolie met sandelhout-extract. Ontwikkeld voor de perfecte glans, hydratatie en verzorging.',
    afbeelding: newsImg3
  }
])

// شرط الامتحان: فلترة وتصفية آخر خبرين فقط لعرضهما في أسفل الـ Homepage
const laatsteTweeBerichten = computed(() => {
  return nieuwsBerichten.value.slice(0, 2)
})
</script>

<template>
  <div class="home-page bg-dark text-white min-vh-100 d-flex flex-column">
    
   
    <!-- شريط الصور التفاعلي (Carousel) بالصور المحلية الثلاثة -->
    <FotosCarousel />

    <!-- القسم الترحيبي بهوية صالون الحلاقة الفخم -->
    <section class="welcome-section py-5 text-center bg-dark">
      <div class="container py-3">
        <h2 class="display-5 fw-bold text-warning mb-3">Welkom bij Barbershop Barberitos</h2>
        <p class="lead text-muted mx-auto" style="max-width: 750px;">
          Stap binnen in de wereld van pure mannelijke verzorging. Wij combineren de rijke tradities van het barbiersambacht met de modernste technieken van nu. Geniet van de ervaring, de rust en ons pure vakmanschap.
        </p>
        <div class="mt-4 gap-3 d-flex justify-content-center flex-wrap">
          <router-link to="/onzeKappar" class="btn btn-warning fw-bold rounded-pill px-4 py-2">Onze Barbiers</router-link>
          <router-link to="/contact" class="btn btn-outline-light fw-bold rounded-pill px-4 py-2">Maak een Afspraak</router-link>
        </div>
      </div>
    </section>

    <!-- قسم آخر خبرين فقط مبرمج بالكامل بالصور المحلية المفلترة -->
    <section class="home-news py-5 bg-black border-top border-secondary flex-grow-1">
      <div class="container">
        <h3 class="text-center fw-bold text-warning mb-2">Laatste Nieuws</h3>
        <p class="text-center text-muted mb-5">Blijf op de hoogte van de nieuwste updates in onze shop</p>

        <div class="row g-4 justify-content-center">
          <!-- العرض المتجاوب: بجانب بعضهما على الكمبيوتر وتحت بعضهما تماماً على الموبايل -->
          <div 
            class="col-lg-5 col-md-6 col-12" 
            v-for="bericht in laatsteTweeBerichten" 
            :key="bericht.id"
          >
            <div class="card h-100 bg-dark text-white border-secondary shadow-lg overflow-hidden home-news-card">
              <img :src="bericht.afbeelding" class="card-img-top" :alt="bericht.titel" style="height: 230px; object-fit: cover;">
              <div class="card-body p-4 d-flex flex-column">
                <span class="text-warning small fw-bold mb-2">🗓️ {{ bericht.datum }}</span>
                <h4 class="card-title text-warning fw-bold mb-3 fs-5">{{ bericht.titel }}</h4>
                <p class="card-text text-muted small flex-grow-1">{{ bericht.bericht.substring(0, 120) }}...</p>
                <hr class="border-secondary mt-3">
                <router-link to="/nieuws" class="text-warning fw-bold small text-decoration-none hover-underline mt-auto">
                  Lees het hele bericht →
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    

  </div>
</template>
