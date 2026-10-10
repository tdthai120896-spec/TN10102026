import { TIMELINE_STORY } from '../config.js';

export function renderStorySection() {
  return `
    <section id="story" class="space-y-16">
      
      <!-- Lời nhắn nhủ -->
      <div class="reveal-item text-center max-w-2xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-semibold text-theme-sage">Lời Nhắn Nhủ Yêu Thương</span>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-theme-text">Gửi Thiên Thần Nhỏ Của Ba Mẹ</h2>
        <div class="w-16 h-[2px] bg-theme-gold mx-auto rounded-full"></div>
        <p class="text-sm sm:text-base text-theme-secondary leading-relaxed font-normal italic pt-2 px-2">
          "365 ngày qua là một hành trình diệu kỳ. Cảm ơn Khả Hân đã đến và mang theo cả bầu trời hạnh phúc, biến căn nhà nhỏ của ba mẹ luôn đầy ắp tiếng cười. Chúc con gái yêu một đời bình an, hồn nhiên và luôn được yêu thương che chở."
        </p>
      </div>

      <!-- Ý nghĩa tên Huỳnh Lê Khả Hân -->
      <div class="reveal-item grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="glass-warm p-7 rounded-apple-card border border-theme-sage/20 space-y-3">
          <span class="text-xs font-bold text-theme-gold uppercase tracking-wider">Ý Nghĩa Tên Con</span>
          <h3 class="text-xl font-serif font-bold text-theme-text">Huỳnh Lê Khả Hân</h3>
          <p class="text-xs sm:text-sm text-theme-secondary leading-relaxed">
            <strong>"Khả"</strong> là khả ái, nét đẹp đáng yêu, nụ cười làm say lòng người.<br>
            <strong>"Hân"</strong> là hân hoan, rạng rỡ, niềm vui bất tận.<br>
            Ba mẹ đặt tên con là <strong>Khả Hân</strong> với mong ước con gái sẽ luôn là cô bé vui vẻ, tươi sáng và mang đến nguồn năng lượng hạnh phúc cho mọi người xung quanh.
          </p>
        </div>

        <div class="glass-warm p-7 rounded-apple-card border border-theme-sage/20 space-y-3 flex flex-col justify-center">
          <span class="text-xs font-bold text-theme-sage uppercase tracking-wider">Thơ Mừng Thôi Nôi</span>
          <p class="text-xs sm:text-sm text-theme-text font-serif italic leading-relaxed">
            "Mười hai tháng trọn đầu đời,<br>
            Khả Hân hé miệng nụ cười xinh tươi.<br>
            Mai này vững bước đường dài,<br>
            Bình an, hạnh phúc nối hoài cùng con."
          </p>
          <div class="text-right text-xs font-cursive text-theme-gold text-xl">- Yêu Khả Hân thật nhiều -</div>
        </div>
      </div>

      <!-- Timeline 12 tháng -->
      <div class="reveal-item glass-warm rounded-apple-banner p-6 sm:p-10 border border-theme-sage/20 space-y-8">
        <div class="text-center space-y-1">
          <span class="text-xs uppercase tracking-widest font-semibold text-theme-gold">First 365 Days</span>
          <h3 class="text-xl sm:text-2xl font-serif font-bold text-theme-text">Hành Trình 365 Ngày Đầu Đời Của Khả Hân</h3>
          <p class="text-xs text-theme-secondary">Từng bước ngoặt nhỏ ghi dấu sự lớn khôn của con gái</p>
        </div>

        <div class="relative border-l-2 border-theme-gold/40 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          ${TIMELINE_STORY.map(item => `
            <div class="relative group">
              <div class="absolute -left-[31px] sm:-left-[39px] top-0.5 w-4 h-4 rounded-full bg-white border-4 border-theme-sage shadow-md"></div>
              
              <div class="space-y-1">
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-theme-gold-light text-theme-gold text-[11px] font-bold border border-theme-gold-border">
                  ${item.month}
                </span>
                <h4 class="text-base font-bold text-theme-text">${item.title}</h4>
                <p class="text-xs sm:text-sm text-theme-secondary leading-relaxed">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </section>
  `;
}