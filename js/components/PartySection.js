import { IMAGE_ASSETS, BABY_CONFIG } from '../config.js';

export function renderPartySection() {
  return `
    <section id="party" class="space-y-6">
      <div class="text-center space-y-2 reveal-item">
        <span class="text-xs uppercase tracking-widest font-semibold text-theme-sage">Thông Tin Buổi Tiệc</span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-theme-text">Thời Gian & Địa Điểm</h2>
        <p class="text-xs text-theme-secondary font-light">Sự hiện diện của quý quan khách là niềm vinh hạnh to lớn của gia đình</p>
      </div>

      <!-- TẤM THIỆP GỘP 1 KHỐI DUY NHẤT CHUẨN APPLE CARD -->
      <div class="reveal-item relative rounded-apple-banner overflow-hidden shadow-2xl border border-theme-sage/20 group min-h-[550px] sm:min-h-[500px] flex flex-col justify-end">
        
        <!-- 1. ẢNH NỀN LOCATION -->
        <img 
          src="${IMAGE_ASSETS.photo_location}" 
          alt="${BABY_CONFIG.locationName}" 
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
          onclick="window.openLightbox('${IMAGE_ASSETS.photo_location}')"
          onerror="this.src='/assets/photo_hero.jpg'"
        />

        <!-- 2. LỚP PHỦ GRADIENT TỐI TỰ NHIÊN ĐỂ CHỮ NỔI RÕ NÉT -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 pointer-events-none"></div>

        <!-- Nút bấm phóng to ảnh ở góc trên -->
        <button onclick="window.openLightbox('${IMAGE_ASSETS.photo_location}')" class="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
          <span>Xem ảnh lớn</span>
        </button>

        <!-- 3. TOÀN BỘ THÔNG TIN DỒN LÊN TRÊN HÌNH -->
        <div class="relative z-10 p-5 sm:p-7 text-white space-y-4">
          
          <!-- Huy hiệu & Nút mở Maps -->
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-emerald-300">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              ĐỊA ĐIỂM TIỆC THÔI NÔI
            </div>

            <a href="${BABY_CONFIG.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="bg-white text-theme-text hover:bg-theme-gold-light px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xl flex items-center gap-1.5 active:scale-95 group/btn">
              <span>Mở Google Maps</span>
              <svg class="w-3.5 h-3.5 text-theme-sage group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>

          <!-- Tên Quán & Địa chỉ -->
          <div class="space-y-1">
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight drop-shadow-md">
              ${BABY_CONFIG.locationName}
            </h3>
            <p class="text-xs sm:text-sm text-white/90 flex items-center gap-1.5 font-light">
              <svg class="w-3.5 h-3.5 text-theme-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              ${BABY_CONFIG.locationAddress}
            </p>
          </div>

          <!-- Khối Thời gian & Lịch trình (Kính mờ Apple Liquid) -->
          <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="space-y-1 border-b sm:border-b-0 sm:border-r border-white/15 pb-2.5 sm:pb-0 sm:pr-3">
              <span class="text-[10px] uppercase font-bold text-theme-gold-border tracking-wider">Thời Gian Diễn Ra</span>
              <p class="font-bold text-sm text-white">${BABY_CONFIG.partyTimeString}</p>
              <p class="text-white/80 font-light text-[11px]">${BABY_CONFIG.partyDateString}</p>
            </div>

            <div class="space-y-1 sm:pl-2">
              <span class="text-[10px] uppercase font-bold text-emerald-300 tracking-wider">Lịch Trình Tiệc</span>
              <p class="text-white/90 text-[11px]">• <span class="font-semibold text-white">17:30</span> - Đón khách & Chụp hình cùng Khả Hân</p>
              <p class="text-white/90 text-[11px]">• <span class="font-semibold text-white">18:30</span> - Khai tiệc BBQ & Nâng ly chúc mừng</p>
            </div>
          </div>

          <!-- Dresscode đồng bộ ở chân thẻ -->
          <div class="pt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-white/85">
            <div class="flex items-center gap-2">
              <span class="text-[11px] font-medium text-white/70">Dresscode:</span>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-[10px] font-semibold text-white">
                <span class="w-2.5 h-2.5 rounded-full bg-[#5F7A64] border border-white/30"></span> Xanh Sage
              </span>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-[10px] font-semibold text-white">
                <span class="w-2.5 h-2.5 rounded-full bg-[#E5D4B3] border border-white/30"></span> Vàng Kem
              </span>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-[10px] font-semibold text-white">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FFFFFF] border border-white/30"></span> Trắng
              </span>
            </div>
            <span class="text-[10px] text-white/60 italic hidden sm:inline">🌿 Có bãi đỗ xe ô tô & xe máy rộng rãi</span>
          </div>

        </div>

      </div>
    </section>
  `;
}