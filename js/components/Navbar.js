import { IMAGE_ASSETS, BABY_CONFIG } from '../config.js';

export function renderNavbar() {
  return `
    <!-- THANH BAR CHÍNH (DYNAMIC ISLAND) -->
    <header class="fixed top-3 inset-x-0 z-50 flex justify-center px-3.5 pointer-events-none">
      <nav class="pointer-events-auto w-full max-w-4xl bg-white/95 backdrop-blur-2xl border-2 border-theme-sage/20 shadow-2xl rounded-full px-3.5 sm:px-6 py-2 flex items-center justify-between transition-all">
        
        <!-- Logo & Avatar bé -->
        <a href="#hero" class="flex items-center gap-2.5 group">
          <div class="w-8 h-8 rounded-full overflow-hidden border border-theme-gold shadow-sm flex-shrink-0">
            <img src="${IMAGE_ASSETS.photo_hero}" alt="Avatar" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
          </div>
          <div class="leading-tight">
            <span class="block text-xs sm:text-sm font-bold text-theme-text tracking-tight">${BABY_CONFIG.fullName}</span>
            <span class="block text-[10px] text-theme-gold font-semibold uppercase tracking-wider">Tròn 1 Tuổi</span>
          </div>
        </a>
        
        <!-- Menu đầy đủ trên Laptop/Tablet -->
        <div class="hidden md:flex items-center gap-6 text-theme-secondary text-xs font-semibold">
          <a href="#hero" class="hover:text-theme-sage transition-colors">Trang Đầu</a>
          <a href="#story" class="hover:text-theme-sage transition-colors">Tâm Tình</a>
          <a href="#info" class="hover:text-theme-sage transition-colors">Về Bé</a>
          <a href="#gallery" class="hover:text-theme-sage transition-colors">Khoảnh Khắc</a>
          <a href="#party" class="hover:text-theme-sage transition-colors">Tiệc Mừng</a>
        </div>

        <!-- Cụm nút hành động bên phải -->
        <div class="flex items-center gap-2">
          <!-- Nút gửi lời chúc -->
          <a href="#rsvp" class="bg-theme-sage text-white px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-opacity-90 active:scale-95 transition-all shadow-md">
            Gửi Lời Chúc
          </a>

          <!-- Nút Menu thông minh dành riêng cho Mobile (3 gạch) -->
          <button onclick="window.toggleMobileMenu()" class="md:hidden w-8 h-8 rounded-full bg-theme-sage-light text-theme-sage flex items-center justify-center focus:outline-none active:scale-95 transition-transform" aria-label="Toggle Menu">
            <svg id="menuIcon" class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- MENU THÔNG MINH TRƯỢT XUỐNG DÀNH CHO MOBILE (iOS Glass Sheet) -->
    <div id="mobileMenuDrawer" class="fixed inset-x-3 top-16 z-40 bg-white/95 backdrop-blur-2xl border-2 border-theme-sage/20 rounded-3xl p-5 shadow-2xl transition-all duration-300 opacity-0 -translate-y-6 pointer-events-none md:hidden">
      <div class="grid grid-cols-2 gap-2.5 text-xs font-semibold text-theme-text">
        <a href="#hero" onclick="window.closeMobileMenu()" class="p-3 rounded-2xl bg-theme-sage-soft/60 flex items-center gap-2 active:bg-theme-sage-light">
          <span>🏠</span> Trang Đầu
        </a>
        <a href="#story" onclick="window.closeMobileMenu()" class="p-3 rounded-2xl bg-theme-sage-soft/60 flex items-center gap-2 active:bg-theme-sage-light">
          <span>💌</span> Tâm Tình Ba Mẹ
        </a>
        <a href="#info" onclick="window.closeMobileMenu()" class="p-3 rounded-2xl bg-theme-sage-soft/60 flex items-center gap-2 active:bg-theme-sage-light">
          <span>👶</span> Thông Tin Bé
        </a>
        <a href="#gallery" onclick="window.closeMobileMenu()" class="p-3 rounded-2xl bg-theme-sage-soft/60 flex items-center gap-2 active:bg-theme-sage-light">
          <span>📸</span> Khoảnh Khắc
        </a>
        <a href="#party" onclick="window.closeMobileMenu()" class="p-3 rounded-2xl bg-theme-sage-soft/60 flex items-center gap-2 active:bg-theme-sage-light">
          <span>📍</span> Địa Điểm Tiệc
        </a>
        <a href="#rsvp" onclick="window.closeMobileMenu()" class="p-3 rounded-2xl bg-theme-gold-light text-theme-gold border border-theme-gold-border flex items-center gap-2 active:scale-95">
          <span>✍️</span> Sổ Lưu Bút
        </a>
      </div>
    </div>
  `;
}