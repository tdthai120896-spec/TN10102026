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

// ==========================================
// 1. TỰ ĐỘNG PHÁT NHẠC THÔNG MINH (AUTOPLAY DUAL-MODE)
// ==========================================
let isPlaying = false;

window.toggleMusic = function() {
  const audio = document.getElementById("bgMusic");
  const icon = document.getElementById("musicIconWrapper");
  const text = document.getElementById("musicStatusText");

  if (!isPlaying) {
    audio.play().then(() => {
      isPlaying = true;
      icon?.classList.add("animate-spin-music");
      if (text) text.innerText = "Tắt Nhạc";
    }).catch(err => console.log("Trình duyệt chặn autoplay:", err));
  } else {
    audio.pause();
    isPlaying = false;
    icon?.classList.remove("animate-spin-music");
    if (text) text.innerText = "Phát Nhạc";
  }
};

function setupAutoPlay() {
  const audio = document.getElementById("bgMusic");
  const icon = document.getElementById("musicIconWrapper");
  const text = document.getElementById("musicStatusText");

  const startMusic = () => {
    if (!isPlaying && audio) {
      audio.play().then(() => {
        isPlaying = true;
        icon?.classList.add("animate-spin-music");
        if (text) text.innerText = "Tắt Nhạc";
        // Khi nhạc đã phát thành công, gỡ các lắng nghe sự kiện
        ['touchstart', 'click', 'scroll', 'touchend'].forEach(evt => {
          document.removeEventListener(evt, startMusic);
        });
      }).catch(() => {
        // Trình duyệt chưa cho phép, tiếp tục chờ tương tác đầu tiên
      });
    }
  };

  // Thử phát ngay lập tức khi load trang
  startMusic();

  // Cơ chế dự phòng: Kích hoạt ngay khi người dùng chạm hoặc lướt màn hình lần đầu
  ['touchstart', 'click', 'scroll', 'touchend'].forEach(evt => {
    document.addEventListener(evt, startMusic, { passive: true, once: false });
  });
}

// ==========================================
// 2. ĐIỀU KHIỂN MENU MOBILE
// ==========================================
let isMobileMenuOpen = false;

window.toggleMobileMenu = function() {
  const drawer = document.getElementById("mobileMenuDrawer");
  const icon = document.getElementById("menuIcon");
  isMobileMenuOpen = !isMobileMenuOpen;

  if (isMobileMenuOpen) {
    drawer.classList.remove("opacity-0", "-translate-y-6", "pointer-events-none");
    drawer.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/>`;
  } else {
    window.closeMobileMenu();
  }
};

window.closeMobileMenu = function() {
  const drawer = document.getElementById("mobileMenuDrawer");
  const icon = document.getElementById("menuIcon");
  isMobileMenuOpen = false;
  if (drawer) {
    drawer.classList.add("opacity-0", "-translate-y-6", "pointer-events-none");
    drawer.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
  }
  if (icon) {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16m-7 6h7"/>`;
  }
};

// ==========================================
// 3. ĐỒNG HỒ ĐẾM NGƯỢC
// ==========================================
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

// ==========================================
// 4. SỔ LƯU BÚT LỜI CHÚC
// ==========================================
function initWishSystem() {
  const DEFAULT_WISHES = [
    { name: "Ông Bà Ngoại", message: "Chúc bé Khả Hân mau ăn chóng lớn, luôn tươi cười rạng rỡ và bình an!", time: "Hôm nay" },
    { name: "Cô Phương Thảo", message: "Mừng thôi nôi công chúa nhỏ! Chúc con cả đời ngập tràn niềm vui và hạnh phúc.", time: "Hôm qua" }
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

// ==========================================
// 5. HIỆU ỨNG CUỘN TRANG
// ==========================================
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
  setupAutoPlay();
});