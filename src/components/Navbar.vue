<template>
  <!-- شريط التنقل باللون الأسود الفخم والحدود الرمادية المتناسقة مع هوية الصالون -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary py-3 px-4">
    <div class="container-fluid">
      
      <!-- 1. اللوغو (Logo كصورة): عند الضغط على الصورة أو النص يعيد المستخدم للصفحة الرئيسية -->
      <router-link class="navbar-brand d-flex align-items-center fw-bold text-warning fs-3 gap-2" to="/">
        <!-- كود الصورة: تأكدي أن اسم الملف logo.png موجود داخل مجلد assets/images -->
        <img 
          src="../assets/images/logo.png" 
          alt="Barberitos Logo" 
          style="height: 50px; width: auto; object-fit: contain;"
          class="d-inline-block align-top logo-img"
        >
        <span class="logo-text tracking-wider ms-1">Barberitos</span>
      </router-link>

      <!-- 2. زر القائمة المتجاوب للموبايل (Hamburger Menu) -->
      <button 
        class="navbar-toggler border-secondary" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#barberitosNavbar" 
        aria-controls="barberitosNavbar" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 3. الروابط الخمسة الأساسية لمتطلبات الموقع -->
      <div class="collapse navbar-collapse justify-content-end" id="barberitosNavbar">
        <ul class="navbar-nav gap-3 text-center mt-3 mt-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white fw-semibold hover-gold px-3 py-2">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/overOns" class="nav-link text-white fw-semibold hover-gold px-3 py-2">
              Over ons
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/onzeKappar" class="nav-link text-white fw-semibold hover-gold px-3 py-2">
              Onze Kappers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nieuws" class="nav-link text-white fw-semibold hover-gold px-3 py-2">
              Nieuws
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link text-white fw-semibold hover-gold px-3 py-2">
              Contact
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

