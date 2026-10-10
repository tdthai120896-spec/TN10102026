import { IMAGE_ASSETS } from '../config.js';

export function renderBabyInfoSection() {
  return `
    <section id="info" class="space-y-6 reveal-on-scroll">
      <div class="text-center space-y-1">
        <h2 class="text-xs uppercase tracking-widest font-semibold text-apple-sage">Thông Tin Của Bé</h2>
        <p class="text-2xl sm:text-3xl font-bold tracking-tight text-apple-text">Chỉ Số Vui Nhộn & Tính Cách</p>
      </div>

      <!-- Bento Grid Apple -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
        <!-- Ảnh Đứng 1 (4:5) -->
        <div class="md:col-span-4 rounded-apple-card overflow-hidden shadow-apple-card border border-black/5 aspect-4-5 relative group cursor-pointer" onclick="window.openLightbox('${IMAGE_ASSETS.photo_info_1}')">
          <img 
            src="${IMAGE_ASSETS.photo_info_1}" 
            alt="Baby Info 1" 
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onerror="this.src='https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80'" 
          />
          <div class="absolute bottom-3 left-4 right-4 p-2.5 rounded-xl apple-glass text-xs text-apple-text text-center font-medium">
            Nụ cười toả nắng ☀️
          </div>
        </div>

        <!-- Thẻ chỉ số Bento ở giữa -->
        <div class="md:col-span-4 grid grid-cols-2 gap-4">
          <div class="p-5 rounded-apple-card bg-white apple-border shadow-apple-soft flex flex-col justify-between">
            <span class="text-xs text-apple-secondary">Cân nặng</span>
            <div class="my-2">
              <span class="text-3xl font-bold text-apple-text tracking-tight">9.6</span>
              <span class="text-xs text-apple-secondary">kg</span>
            </div>
            <span class="text-[11px] text-apple-sage font-medium">Bụ bẫm đáng yêu</span>
          </div>

          <div class="p-5 rounded-apple-card bg-white apple-border shadow-apple-soft flex flex-col justify-between">
            <span class="text-xs text-apple-secondary">Chiều cao</span>
            <div class="my-2">
              <span class="text-3xl font-bold text-apple-text tracking-tight">76</span>
              <span class="text-xs text-apple-secondary">cm</span>
            </div>
            <span class="text-[11px] text-apple-gold font-medium">Chân dài giống ba</span>
          </div>

          <div class="p-5 rounded-apple-card bg-white apple-border shadow-apple-soft flex flex-col justify-between">
            <span class="text-xs text-apple-secondary">Số răng</span>
            <div class="my-2">
              <span class="text-3xl font-bold text-apple-text tracking-tight">8</span>
              <span class="text-xs text-apple-secondary">chiếc</span>
            </div>
            <span class="text-[11px] text-apple-sage font-medium">Cười khoe răng thỏ</span>
          </div>

          <div class="p-5 rounded-apple-card bg-white apple-border shadow-apple-soft flex flex-col justify-between">
            <span class="text-xs text-apple-secondary">Tháng tuổi</span>
            <div class="my-2">
              <span class="text-3xl font-bold text-apple-text tracking-tight">12</span>
              <span class="text-xs text-apple-secondary">tháng</span>
            </div>
            <span class="text-[11px] text-apple-gold font-medium">Tròn 1 tuổi ấm áp</span>
          </div>

          <div class="col-span-2 p-5 rounded-apple-card bg-apple-sage-light/50 border border-apple-sage/20">
            <h4 class="text-xs font-semibold uppercase text-apple-sage mb-2 tracking-wider">Sở thích của bé</h4>
            <p class="text-xs text-apple-text leading-relaxed">
              Thích nghe bài hát "Baby Shark", vỗ tay hoan hô khi được khen, tự bò đuổi theo bóng và bi bô gọi "Ba... Mẹ".
            </p>
          </div>
        </div>

        <!-- Ảnh Đứng 2 (4:5) -->
        <div class="md:col-span-4 rounded-apple-card overflow-hidden shadow-apple-card border border-black/5 aspect-4-5 relative group cursor-pointer" onclick="window.openLightbox('${IMAGE_ASSETS.photo_info_2}')">
          <img 
            src="${IMAGE_ASSETS.photo_info_2}" 
            alt="Baby Info 2" 
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onerror="this.src='https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80'" 
          />
          <div class="absolute bottom-3 left-4 right-4 p-2.5 rounded-xl apple-glass text-xs text-apple-text text-center font-medium">
            Công chúa nhỏ của gia đình ✨
          </div>
        </div>
      </div>
    </section>
  `;
}