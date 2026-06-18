<script setup>
import { ref, computed } from 'vue'

// 1. استدعاء صور الحلاقين الستة محلياً من مجلد assets/images بجهازكِ
const kapper1 = new URL('../assets/images/Kapper1.jpg', import.meta.url).href
const kapper2 = new URL('../assets/images/Kapper2.jfif', import.meta.url).href
const kapper3 = new URL('../assets/images/Kapper3.jfif', import.meta.url).href
const kapper4 = new URL('../assets/images/Kapper4.jfif', import.meta.url).href
const kapper5 = new URL('../assets/images/Kapper5.jfif', import.meta.url).href
const kapper6 = new URL('../assets/images/Kapper6.jfif', import.meta.url).href

// 2. مصفوفة الحلاقين الستة مبرمجة بالكامل لتأخذ صوركِ المحلية مباشرة
const barbers = ref([
  {
    naam: 'Ferdinand Shavette',
    leeftijd: 45,
    specialiteit: 'Traditioneel scheren met open mes & Hot Towel Shave',
    url_img: kapper1
  },
  {
    naam: 'Achmed',
    leeftijd: 29,
    specialiteit: 'Strakke baardcontouren & Oosterse opscheer technieken',
    url_img: kapper2
  },
  {
    naam: 'Gianluca',
    leeftijd: 34,
    specialiteit: 'Klassieke Italiaanse herenkapsels & Scharenwerk',
    url_img: kapper3
  },
  {
    naam: 'Omar',
    leeftijd: 27,
    specialiteit: 'Moderne fades, Skinfades & Hair Art ontwerpen',
    url_img: kapper4
  },
  {
    naam: 'Kofi',
    leeftijd: 31,
    specialiteit: 'Exclusieve baardverzorging & Black hair styling',
    url_img: kapper5
  },
  {
    naam: 'Lucas',
    leeftijd: 25,
    specialiteit: 'Trendy herenkapsels, Wassen & Hoofdhuidmassage',
    url_img: kapper6
  }
])

const search = ref('')

// دالة تصفية البحث الذكية بناءً على الاسم أو التخصص
const filteredBarbers = computed(() => {
  return barbers.value.filter(barber =>
    barber.naam.toLowerCase().includes(search.value.toLowerCase()) ||
    barber.specialiteit.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <section class="kappers-section py-5 bg-dark text-white">
    <div class="container">
      
      <!-- عنوان القسم الفخم لـ Barberitos -->
      <h1 class="text-center mb-2 fw-bold text-warning display-4">Onze Meesterbarbiers</h1>
      <p class="text-center text-muted mb-5 fs-5">Vakmanschap op maat. Maak kennis met ons professionele team.</p>

      <!-- شريط البحث -->
      <div class="row justify-content-center mb-5">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control bg-secondary text-white border-0 py-2.5 px-4 rounded-pill shadow-sm"
            placeholder="Zoek een barbier op naam of specialiteit..."
            v-model="search"
          >
        </div>
      </div>

      <!-- شبكة العرض المتجاوبة (شرط الامتحان الصارم) -->
      <!-- col-lg-3: 4 حلاقين بجانب بعضهم على الكمبيوتر -->
      <!-- col-12: حلاق واحد ممتد وتحت بعضهم بالكامل على الموبايل -->
      <div class="row g-4" v-if="filteredBarbers.length > 0">
        <div
          class="col-lg-3 col-md-6 col-12" 
          v-for="barber in filteredBarbers"
          :key="barber.naam"
        >
          <div class="card h-100 bg-black text-white border-secondary shadow-lg rounded-3 overflow-hidden kapper-card">
            
            <!-- عرض صورتكِ المحلية المربوطة بكل حلاق -->
            <img 
              :src="barber.url_img" 
              class="card-img-top w-100 kapper-img" 
              :alt="barber.naam"
              style="height: 280px; object-fit: cover;"
            >
            
            <!-- بيانات الحلاق -->
            <div class="card-body p-4 d-flex flex-column">
              <h5 class="card-title fw-bold text-warning mb-1 fs-5">{{ barber.naam }}</h5>
              <p class="text-muted small mb-3">Leeftijd: {{ barber.leeftijd }} jaar</p>
              
              <hr class="border-secondary my-2">
              
              <p class="card-text small text-light-50 flex-grow-1">
                <strong class="text-warning d-block mb-1">Specialiteit:</strong>
                {{ barber.specialiteit }}
              </p>
              
              <router-link to="/contact" class="btn btn-sm btn-outline-warning rounded-pill mt-3 fw-bold w-100">
                Boek {{ barber.naam.split(' ')[0] }}
              </router-link>
            </div>

          </div>
        </div>
      </div>

      <!-- رسالة في حال لم ينجح البحث -->
      <div class="text-center py-5" v-else>
        <p class="fs-5 text-muted">Geen barbiers gevonden die voldoen aan uw zoekopdracht.</p>
      </div>

    </div>
  </section>
</template>
