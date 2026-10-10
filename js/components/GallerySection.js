import { IMAGE_ASSETS } from '../config.js';

export function renderGallerySection() {
  return `
    <section id="gallery" class="space-y-8">
      <div class="text-center space-y-2 reveal-item">
        <span class="text-xs uppercase tracking-widest font-semibold text-theme-sage">Bộ Sưu Tập Kỷ Niệm</span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-theme-text">Từng Khoảnh Khắc Lớn Khôn</h2>
        <p class="text-xs text-theme-secondary font-light">Chạm vào từng bức ảnh để ngắm nhìn bé sắc nét hơn</p>
      </div>

      <!-- Lưới Full Ảnh Không Bị Cắt (Natural Aspect-Ratio) -->
      <div class="space-y-6">
        
        <!-- Hàng 1: 1 Ảnh ngang Banner lớn trọn vẹn -->
        <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${IMAGE_ASSETS.photo_gallery_1}')">
          <img src="${IMAGE_ASSETS.photo_gallery_1}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.01] transition-transform duration-500" alt="Khoảnh khắc 1" />
        </div>

        <!-- Hàng 2: 2 Ảnh đứng Song Song Hiển Thị Trọn Vẹn -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${IMAGE_ASSETS.photo_gallery_4}')">
            <img src="${IMAGE_ASSETS.photo_gallery_4}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.02] transition-transform duration-500" alt="Khoảnh khắc 4" />
          </div>
          <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${IMAGE_ASSETS.photo_gallery_5}')">
            <img src="${IMAGE_ASSETS.photo_gallery_5}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.02] transition-transform duration-500" alt="Khoảnh khắc 5" />
          </div>
        </div>

        <!-- Hàng 3: 2 Ảnh Ngang Đặt Liền Nhau Trọn Vẹn -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${IMAGE_ASSETS.photo_gallery_2}')">
            <img src="${IMAGE_ASSETS.photo_gallery_2}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.02] transition-transform duration-500" alt="Khoảnh khắc 2" />
          </div>
          <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${IMAGE_ASSETS.photo_gallery_3}')">
            <img src="${IMAGE_ASSETS.photo_gallery_3}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.02] transition-transform duration-500" alt="Khoảnh khắc 3" />
          </div>
        </div>

      </div>
    </section>
  `;
}