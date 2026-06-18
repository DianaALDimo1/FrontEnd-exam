<script setup>
import { ref } from 'vue'

const nieuwsBerichten = ref([
  {
    id: 1,
    titel: 'Nieuwe Authentieke Barbiersstoelen Geïnstalleerd!',
    datum: '15 Juni 2026',
    bericht: 'Vanaf vandaag zit u nog comfortabeler tijdens uw behandeling in onze gloednieuwe, handgemaakte retro Belmont stoelen. Kom langs en ervaar het zelf!',
    afbeelding: new URL('../assets/images/Photo1.jpg', import.meta.url).href
  },
  {
    id: 2,
    titel: 'Exclusieve Whisky & Single Malt Avonden',
    datum: '10 Juni 2026',
    bericht: 'Geniet vanaf volgende week elke vrijdagavond van een premium glas single malt whisky tijdens uw uitgebreide baard- en scheerbehandeling volgens oud ambacht.',
    afbeelding: new URL('../assets/images/Photo2.jpg', import.meta.url).href
  },
  {
    id: 3,
    titel: 'Introductie: Onze Eigen Premium Baardolie',
    datum: '05 Juni 2026',
    bericht: 'Na maanden testen lanceren wij onze eigen biologische baardolie met sandelhout-extract. Ontwikkeld voor de perfecte glans, hydratatie en verzorging.',
    afbeelding: new URL('../assets/images/Photo3.jfif', import.meta.url).href
  },
  {
    id: 4,
    titel: 'Ferdinand Shavette Wint Regionale Ambachtsprijs',
    datum: '01 Juni 2026',
    bericht: 'Trots! Onze eigenaar Ferdinand is dit jaar officieel verkozen tot een van de meest authentieke en vakkundige barbiers van de regio.',
    afbeelding: new URL('../assets/images/Photo4.jfif', import.meta.url).href
  },
  {
    id: 5,
    titel: 'Uitbreiding van ons Team met Meesterbarbier Omar',
    datum: '28 Mei 2026',
    bericht: 'Vanaf volgende week versterkt Omar ons team. Hij heeft jarenlange ervaring in Italië en is gespecialiseerd in strakke contours en moderne fades.',
    afbeelding: new URL('../assets/images/Photo5.jfif', import.meta.url).href
  },
  {
    id: 6,
    titel: 'Barberitos Systemen Volledig Beveiligd en Geüpgraded',
    datum: '20 Mei 2026',
    bericht: 'Na een korte offline-periode door een externe storing, zijn al onze systemen en de website weer online en maximaal beveiligd. Bedankt voor uw loyaliteit!',
    afbeelding: new URL('../assets/images/Photo6.jfif', import.meta.url).href
  }
])

const geselecteerdBericht = ref(null)
const openDetail = (bericht) => { geselecteerdBericht.value = bericht }
const sluitDetail = () => { geselecteerdBericht.value = null }
</script>

<template>
  <div class="container my-5 text-white">
    
    <!-- Detailpagina -->
    <div v-if="geselecteerdBericht" class="detail-pagina py-4">
      <button @click="sluitDetail" class="btn btn-outline-warning rounded-pill mb-4 px-4 fw-bold">← Terug naar overzicht</button>
      <div class="row g-5">
        <div class="col-lg-6">
          <img :src="geselecteerdBericht.afbeelding" class="img-fluid rounded-3 shadow-lg border border-secondary w-100" :alt="geselecteerdBericht.titel" style="max-height: 450px; object-fit: cover;">
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <span class="text-warning mb-2 fw-bold fs-5">🗓️ {{ geselecteerdBericht.datum }}</span>
          <h1 class="fw-bold text-warning mb-4 display-5">{{ geselecteerdBericht.titel }}</h1>
          <p class="lead text-light lh-lg">{{ geselecteerdBericht.bericht }}</p>
        </div>
      </div>
    </div>

    <!-- Overzichtspagina -->
    <div v-else>
      <h1 class="text-center mb-2 fw-bold text-warning display-4">Laatste Nieuws van Barberitos</h1>
      <p class="text-center text-muted mb-5 fs-5">Blijf op de hoogte van onze evenementen, acties en updates.</p>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 col-12" v-for="nieuws in nieuwsBerichten" :key="nieuws.id">
          <div @click="openDetail(nieuws)" class="card h-100 bg-black border-secondary text-white shadow-lg news-card cursor-pointer">
            <img :src="nieuws.afbeelding" class="card-img-top" :alt="nieuws.titel" style="height: 240px; object-fit: cover;">
            <div class="card-body d-flex flex-column p-4">
              <span class="text-warning mb-2 small fw-bold">🗓️ {{ nieuws.datum }}</span>
              <h5 class="card-title text-warning fw-bold mb-3">{{ nieuws.titel }}</h5>
              <p class="card-text text-muted small flex-grow-1">{{ nieuws.bericht.substring(0, 100) }}...</p>
              <span class="text-warning mt-3 fw-bold small">Lees meer →</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

