import { PARTY_DATE } from './config.js';
import { renderNavbar } from './components/Navbar.js';
import { renderHeroSection } from './components/HeroSection.js';
import { renderStorySection } from './components/StorySection.js';
import { renderBabyInfoSection } from './components/BabyInfoSection.js';
import { renderGallerySection } from './components/GallerySection.js';
import { renderPartySection } from './components/PartySection.js';
import { renderRSVPSection } from './components/RSVPSection.js';
import { renderFooterSection } from './components/FooterSection.js';
import { renderModals, setupModalHandlers } from './components/Modals.js';

// 1. Quản lý Âm Nhạc (D:\thoi-noi-be\public\music.mp3)
let isPlaying = false;
window.toggleMusic = function() {
  const audio = document.getElementById("bgMusic");
  const icon = document.getElementById("musicIconWrapper");
  const text = document.getElementById("musicStatusText");

  if (!isPlaying) {
    audio.play().then(() => {
      isPlaying = true;
      icon.classList.add("animate-spin-music");
      text.innerText = "Tắt Nhạc";
    }).catch(err => console.log("Trình duyệt yêu cầu tương tác:", err));
  } else {
    audio.pause();
    isPlaying = false;
    icon.classList.remove("animate-spin-music");
    text.innerText = "Phát Nhạc";
  }
};

// Tự động phát khi người dùng chạm lần đầu vào màn hình (theo tiêu chuẩn iOS / Safari)
function initAutoPlayOnInteraction() {
  const handleFirstTouch = () => {
    if (!isPlaying) {
      window.toggleMusic();
    }
    document.removeEventListener("click", handleFirstTouch);
    document.removeEventListener("scroll", handleFirstTouch);
  };
  document.addEventListener("click", handleFirstTouch, { once: true });
  document.addEventListener("scroll", handleFirstTouch, { once: true });
}

// 2. Countdown Timer
function initCountdown() {
  function update() {
    const diff = PARTY_DATE - new Date().getTime();
    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if (d) d.innerText = String(days).padStart(2, "0");
    if (h) h.innerText = String(hours).padStart(2, "0");
    if (m) m.innerText = String(minutes).padStart(2, "0");
    if (s) s.innerText = String(seconds).padStart(2, "0");
  }
  update();
  setInterval(update, 1000);
}

// 3. Sổ lưu bút (Local Storage)
function initWishSystem() {
  const DEFAULT_WISHES = [
    { name: "Ông Bà Ngoại", message: "Chúc bé cưng của ông bà mau ăn chóng lớn, luôn tươi cười và bình an!", time: "Hôm nay" },
    { name: "Cô Phương Thảo", message: "Mừng thôi nôi thiên thần nhỏ! Chúc con cả đời rực rỡ và hạnh phúc.", time: "Hôm qua" }
  ];

  function getWishes() {
    const stored = localStorage.getItem("baby_wishes");
    return stored ? JSON.parse(stored) : DEFAULT_WISHES;
  }

  function renderFeed() {
    const wishes = getWishes();
    const listEl = document.getElementById("wishesList");
    const countBadge = document.getElementById("wishCountBadge");
    if (!listEl) return;

    countBadge.innerText = `${wishes.length} lời chúc`;
    listEl.innerHTML = wishes.map(w => `
      <div class="p-3.5 rounded-xl bg-white/80 border border-theme-sage/10 space-y-1 text-left">
        <div class="flex justify-between items-center">
          <span class="text-xs font-semibold text-theme-text">${w.name}</span>
          <span class="text-[10px] text-theme-secondary">${w.time || 'Vừa xong'}</span>
        </div>
        <p class="text-xs text-theme-secondary leading-relaxed">${w.message}</p>
      </div>
    `).join("");
  }

  renderFeed();

  const form = document.getElementById("wishForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("guestName");
      const msgInput = document.getElementById("guestMessage");

      if (!nameInput.value.trim() || !msgInput.value.trim()) return;

      const wishes = getWishes();
      wishes.unshift({
        name: nameInput.value.trim(),
        message: msgInput.value.trim(),
        time: "Vừa xong"
      });

      localStorage.setItem("baby_wishes", JSON.stringify(wishes));
      renderFeed();

      nameInput.value = "";
      msgInput.value = "";
      window.showToast("Cảm ơn bạn đã gửi lời chúc ý nghĩa!");
    });
  }
}

// 4. Hiệu ứng Cuộn: Chữ từ từ xuất hiện, Ảnh từ mờ (blur) chuyển sang rõ nét
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  document.querySelectorAll(".reveal-item").forEach(el => observer.observe(el));
}

// KHỞI CHẠY ỨNG DỤNG
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar-root").innerHTML = renderNavbar();

  document.getElementById("app").innerHTML = `
    ${renderHeroSection()}
    ${renderStorySection()}
    ${renderBabyInfoSection()}
    ${renderGallerySection()}
    ${renderPartySection()}
    ${renderRSVPSection()}
    ${renderFooterSection()}
  `;

  document.getElementById("modals-root").innerHTML = renderModals();
  setupModalHandlers();

  initCountdown();
  initWishSystem();
  initScrollReveal();
  initAutoPlayOnInteraction();
});