import { BABY_CONFIG } from '../config.js';

export function renderFooterSection() {
  return `
    <footer class="text-center pt-10 pb-6 border-t border-black/5 space-y-4">
      <div class="max-w-md mx-auto space-y-2">
        <h3 class="text-base font-bold text-apple-text">Lời Tri Ân Từ Ba Mẹ Bé</h3>
        <p class="text-xs text-apple-secondary leading-relaxed">
          "Cảm ơn ông bà, cô chú, bác và bạn bè đã luôn dành tình cảm yêu thương che chở cho bé trong suốt 1 năm đầu đời. Sự hiện diện của mọi người là món quà ý nghĩa nhất đối với gia đình chúng mình."
        </p>
      </div>
      <div class="pt-4 text-[11px] text-apple-secondary/70">
        Crafted with Apple Elegance for Bé ${BABY_CONFIG.nickName} • 2026
      </div>
    </footer>
  `;
}