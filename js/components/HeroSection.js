import { IMAGE_ASSETS, BABY_CONFIG } from '../config.js';

export function renderHeroSection() {
  return `
    <section id="hero" class="space-y-8 text-center reveal-item">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-theme-sage/10 text-theme-sage text-xs font-semibold tracking-wide border border-theme-sage/20">
        <span class="w-2 h-2 rounded-full bg-theme-sage animate-pulse"></span>
        TIỆC THÔI NÔI • 1ST BIRTHDAY CELEBRATION
      </div>

      <div class="space-y-3">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-theme-text">
          ${BABY_CONFIG.fullName}
        </h1>
        <p class="text-base sm:text-lg text-theme-secondary font-light">
          Tròn 1 tuổi đầy ắp nụ cười • Tên ở nhà: <span class="font-semibold text-theme-gold">${BABY_CONFIG.nickName}</span>
        </p>
      </div>

      <!-- Banner Ảnh Ngang Full -->
      <div class="relative w-full rounded-apple-banner overflow-hidden shadow-xl border border-theme-sage/20 group cursor-pointer" onclick="window.openLightbox('${IMAGE_ASSETS.photo_hero}')">
        <img 
          src="${IMAGE_ASSETS.photo_hero}" 
          alt="Hero Baby" 
          class="w-full h-auto max-h-[550px] object-cover transition-transform duration-700 ease-out group-hover:scale-102"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-theme-text/50 via-transparent to-transparent"></div>
        <div class="absolute bottom-5 left-6 text-left text-white">
          <span class="text-xs uppercase tracking-widest font-semibold text-theme-gold-light opacity-95">Milestone 1 Year</span>
          <p class="text-base sm:text-lg font-medium">Chào đón tuổi mới thật nhiều niềm vui</p>
        </div>
      </div>

      <!-- Apple Widget Countdown Tone Vàng & Xanh -->
      <div class="pt-2">
        <div class="inline-grid grid-cols-4 gap-2.5 sm:gap-4 p-3.5 rounded-apple-card glass-warm border border-theme-gold-border shadow-lg">
          <div class="w-16 sm:w-20 py-2.5 rounded-2xl bg-white/80 border border-theme-sage/10 text-center">
            <span id="days" class="block text-xl sm:text-2xl font-bold text-theme-text tracking-tight">00</span>
            <span class="text-[10px] text-theme-secondary uppercase font-semibold">Ngày</span>
          </div>
          <div class="w-16 sm:w-20 py-2.5 rounded-2xl bg-white/80 border border-theme-sage/10 text-center">
            <span id="hours" class="block text-xl sm:text-2xl font-bold text-theme-text tracking-tight">00</span>
            <span class="text-[10px] text-theme-secondary uppercase font-semibold">Giờ</span>
          </div>
          <div class="w-16 sm:w-20 py-2.5 rounded-2xl bg-white/80 border border-theme-sage/10 text-center">
            <span id="minutes" class="block text-xl sm:text-2xl font-bold text-theme-text tracking-tight">00</span>
            <span class="text-[10px] text-theme-secondary uppercase font-semibold">Phút</span>
          </div>
          <div class="w-16 sm:w-20 py-2.5 rounded-2xl bg-white/80 border border-theme-sage/10 text-center">
            <span id="seconds" class="block text-xl sm:text-2xl font-bold text-theme-text tracking-tight">00</span>
            <span class="text-[10px] text-theme-secondary uppercase font-semibold">Giây</span>
          </div>
        </div>
      </div>
    </section>
  `;
}