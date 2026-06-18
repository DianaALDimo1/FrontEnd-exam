<script setup>
import { ref } from 'vue'

const formData = ref({
  aanhef: '',
  naam: '',
  email: '',
  telefoon: '',
  bericht: '',
  nieuwsbrief: false
})

const errorMessage = ref('')
const successMessage = ref('')

const handleSubmit = () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!formData.value.aanhef || !formData.value.naam.trim() || !formData.value.email.trim() || !formData.value.telefoon.trim() || !formData.value.bericht.trim()) {
    errorMessage.value = 'Alle velden (behalve de nieuwsbrief) zijn verplicht!'
    return
  }

  successMessage.value = `Bedankt ${formData.value.aanhef} ${formData.value.naam}, uw bericht is succesvol verzonden!`
  
  formData.value = { aanhef: '', naam: '', email: '', telefoon: '', bericht: '', nieuwsbrief: false }
}
</script>

<template>
  <section class="contact-section py-5 bg-dark text-white">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          
          <div class="card bg-black text-white p-4 p-sm-5 rounded-3 border border-secondary shadow-lg">
            <h1 class="text-center text-warning fw-bold mb-2 fs-2">Contact & Afspraak</h1>
            <p class="text-center text-muted small mb-4">Vul het formulier in voor een afspraak of vraag.</p>

            <div v-if="errorMessage" class="alert alert-danger text-center py-2 small">{{ errorMessage }}</div>
            <div v-if="successMessage" class="alert alert-success text-center py-2 small">{{ successMessage }}</div>

            <form @submit.prevent="handleSubmit" class="mt-2">
              
              <!-- Aanhef -->
              <div class="mb-3">
                <label for="aanhef" class="form-label small fw-bold text-light">Aanhef <span class="text-warning">*</span></label>
                <select id="aanhef" v-model="formData.aanhef" class="form-select bg-dark text-white border-secondary">
                  <option value="" disabled selected>Kies uw aanhef...</option>
                  <option value="Dhr.">Dhr.</option>
                  <option value="Mevr.">Mevr.</option>
                </select>
              </div>

              <!-- Naam -->
              <div class="mb-3">
                <label for="name" class="form-label small fw-bold text-light">Volledige Naam <span class="text-warning">*</span></label>
                <input type="text" id="name" v-model="formData.naam" class="form-control bg-dark text-white border-secondary" placeholder="Voor- en achternaam">
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label for="email" class="form-label small fw-bold text-light">E-mailadres <span class="text-warning">*</span></label>
                <input type="email" id="email" v-model="formData.email" class="form-control bg-dark text-white border-secondary" placeholder="naam@voorbeeld.nl">
              </div>

              <!-- Telefoon -->
              <div class="mb-3">
                <label for="telefoon" class="form-label small fw-bold text-light">Telefoonnummer <span class="text-warning">*</span></label>
                <input type="tel" id="telefoon" v-model="formData.telefoon" class="form-control bg-dark text-white border-secondary" placeholder="Bijv. 0612345678">
              </div>

              <!-- Message -->
              <div class="mb-3">
                <label for="message" class="form-label small fw-bold text-light">Uw Bericht <span class="text-warning">*</span></label>
                <textarea id="message" rows="3" v-model="formData.bericht" class="form-control bg-dark text-white border-secondary" placeholder="Uw vraag of gewenste behandeling..."></textarea>
              </div>

              <!-- Nieuwsbrief -->
              <div class="form-check mb-4 mt-2">
                <input type="checkbox" id="nieuwsbrief" v-model="formData.nieuwsbrief" class="form-check-input custom-checkbox">
                <label for="nieuwsbrief" class="form-check-label small text-muted cursor-pointer">Ik meld mij aan voor de nieuwsbrief.</label>
              </div>

              <!-- Button -->
              <button type="submit" class="btn btn-warning w-100 fw-bold rounded-pill py-2.5 shadow">
                Verzend Aanvraag →
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
