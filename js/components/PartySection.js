import { IMAGE_ASSETS, BABY_CONFIG } from '../config.js';

export function renderPartySection() {
  return `
    <section id="party" class="space-y-8">
      <div class="text-center space-y-2 reveal-item">
        <span class="text-xs uppercase tracking-widest font-semibold text-theme-sage">Thông Tin Buổi Tiệc</span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-theme-text">Thời Gian & Địa Điểm</h2>
        <p class="text-xs text-theme-secondary font-light">Sự hiện diện của quý quan khách là niềm vinh hạnh to lớn của gia đình</p>
      </div>

      <!-- Banner Địa điểm Ngang Full Ảnh -->
      <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-xl" onclick="window.openLightbox('${IMAGE_ASSETS.photo_location}')">
        <div class="relative rounded-2xl overflow-hidden">
          <img src="${IMAGE_ASSETS.photo_location}" alt="Party Location" class="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div>
              <span class="text-xs text-emerald-300 font-semibold uppercase tracking-wider">Hân hạnh đón tiếp</span>
              <h3 class="text-xl sm:text-2xl font-bold">${BABY_CONFIG.locationName}</h3>
              <p class="text-xs opacity-90 mt-1">${BABY_CONFIG.locationAddress}</p>
            </div>
            <a href="${BABY_CONFIG.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="bg-white/90 text-theme-text px-4 py-2 rounded-full text-xs font-semibold hover:bg-white transition-all flex items-center gap-1.5 shadow-md">
              <span>Chỉ đường Google Maps</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Thẻ Thời gian & Dresscode -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="reveal-item p-7 rounded-apple-card glass-warm border border-theme-sage/20 space-y-3">
          <div class="w-10 h-10 rounded-2xl bg-theme-sage-light text-theme-sage flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          </div>
          <h4 class="text-xs font-bold text-theme-secondary uppercase tracking-wide">Thời Gian Diễn Ra</h4>
          <p class="text-lg font-bold text-theme-text">${BABY_CONFIG.partyDateString}</p>
          <p class="text-sm font-semibold text-theme-gold">${BABY_CONFIG.partyTimeString}</p>
          <p class="text-xs text-theme-secondary pt-2 border-t border-black/5 leading-relaxed">
            • 18:00 - Đón khách & chụp ảnh lưu niệm cùng bé<br>
            • 19:00 - Bắt đầu nghi thức thôi nôi & dùng tiệc
          </p>
        </div>

        <div class="reveal-item p-7 rounded-apple-card glass-warm border border-theme-sage/20 space-y-3">
          <div class="w-10 h-10 rounded-2xl bg-theme-gold-light text-theme-gold flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
          </div>
          <h4 class="text-xs font-bold text-theme-secondary uppercase tracking-wide">Trang Phục Gợi Ý</h4>
          <p class="text-sm text-theme-text font-medium">Tone màu trang nhã, ấm cúng theo chủ đề:</p>
          
          <div class="flex items-center gap-4 pt-1">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-[#5F7A64] shadow-sm"></span>
              <span class="text-xs font-semibold text-theme-text">Xanh Sage</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-[#E5D4B3] shadow-sm"></span>
              <span class="text-xs font-semibold text-theme-text">Vàng Kem</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-[#FFFFFF] border border-black/10 shadow-sm"></span>
              <span class="text-xs font-semibold text-theme-text">Trắng</span>
            </div>
          </div>
          <p class="text-[11px] text-theme-secondary pt-1 leading-relaxed">
            * Sảnh tiệc có hỗ trợ bãi đỗ xe ô tô và xe máy thuận tiện tại tầng hầm.
          </p>
        </div>
      </div>
    </section>
  `;
}