import { IMAGE_ASSETS } from '../config.js';

export function renderRSVPSection() {
  return `
    <section id="rsvp" class="space-y-8">
      <div class="text-center space-y-2 reveal-item">
        <span class="text-xs uppercase tracking-widest font-semibold text-theme-sage">Sổ Lưu Bút Kỷ Niệm</span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-theme-text">Gửi Lời Chúc Đến Bé</h2>
        <p class="text-xs text-theme-secondary font-light">Tình yêu thương của ông bà, cô chú là món quà quý giá nhất dành cho bé</p>
      </div>

      <!-- Banner RSVP hiển thị trọn vẹn -->
      <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${IMAGE_ASSETS.photo_rsvp}')">
        <img src="${IMAGE_ASSETS.photo_rsvp}" alt="RSVP Photo" class="w-full h-auto rounded-2xl object-contain" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <!-- Form gửi lời chúc -->
        <div class="reveal-item md:col-span-6 p-6 sm:p-7 rounded-apple-card glass-warm border border-theme-sage/20 space-y-4">
          <h3 class="text-base font-bold text-theme-text">Gửi Lời Yêu Thương</h3>
          <form id="wishForm" class="space-y-3.5">
            <div>
              <label class="block text-xs font-semibold text-theme-secondary mb-1">Tên của bạn / Gia đình:</label>
              <input type="text" id="guestName" required placeholder="Ví dụ: Dì Út, Gia đình Bác Nam..." class="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-theme-sage/20 text-sm focus:outline-none focus:ring-2 focus:ring-theme-sage/40 transition-all" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-theme-secondary mb-1">Lời chúc dành cho bé:</label>
              <textarea id="guestMessage" required rows="3" placeholder="Chúc bé luôn mạnh khoẻ, chăm ngoan và rạng rỡ..." class="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-theme-sage/20 text-sm focus:outline-none focus:ring-2 focus:ring-theme-sage/40 transition-all"></textarea>
            </div>
            <button type="submit" class="w-full py-3 rounded-full bg-theme-sage text-white text-xs font-semibold hover:bg-opacity-95 active:scale-95 transition-all shadow-md">
              Gửi Lời Chúc Cho Bé
            </button>
          </form>
        </div>

        <!-- Danh sách lời chúc -->
        <div class="reveal-item md:col-span-6 p-6 sm:p-7 rounded-apple-card glass-warm border border-theme-sage/20 space-y-4">
          <div class="flex justify-between items-center">
            <h3 class="text-base font-bold text-theme-text">Lời Chúc Đã Gửi</h3>
            <span id="wishCountBadge" class="text-xs text-theme-gold font-semibold">0 lời chúc</span>
          </div>
          <div id="wishesList" class="space-y-3 max-h-[320px] overflow-y-auto pr-1"></div>
        </div>
      </div>
    </section>
  `;
}