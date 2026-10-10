export function renderNavbar() {
  return `
    <header class="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav class="pointer-events-auto bg-white/95 backdrop-blur-xl border-2 border-theme-sage/20 shadow-xl rounded-full px-5 sm:px-6 py-2.5 flex items-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-theme-text transition-all">
        <a href="#hero" class="text-theme-sage font-bold tracking-tight text-sm hover:opacity-80">Khả Hân • 1 Tuổi</a>
        
        <div class="hidden md:flex items-center gap-6 text-theme-secondary text-xs">
          <a href="#hero" class="hover:text-theme-sage transition-colors">Trang Đầu</a>
          <a href="#story" class="hover:text-theme-sage transition-colors">Tâm Tình</a>
          <a href="#info" class="hover:text-theme-sage transition-colors">Về Bé</a>
          <a href="#gallery" class="hover:text-theme-sage transition-colors">Khoảnh Khắc</a>
          <a href="#party" class="hover:text-theme-sage transition-colors">Tiệc Mừng</a>
        </div>

        <a href="#rsvp" class="bg-theme-sage text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-opacity-90 active:scale-95 transition-all shadow-md">
          Gửi Lời Chúc
        </a>
      </nav>
    </header>
  `;
}