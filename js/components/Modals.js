export function renderModals() {
  return `
    <!-- LIGHTBOX XEM FULL ẢNH -->
    <div id="lightboxModal" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 opacity-0 pointer-events-none transition-all duration-300">
      <button onclick="window.closeLightbox()" class="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div class="max-w-4xl max-h-[90vh] overflow-hidden rounded-apple-banner shadow-2xl">
        <img id="lightboxImg" src="" alt="Enlarged photo" class="w-full h-full object-contain max-h-[90vh]" />
      </div>
    </div>

    <!-- TOAST THÔNG BÁO NHẸ NHÀNG -->
    <div id="toast" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-theme-text/90 backdrop-blur-md text-white text-xs px-5 py-2.5 rounded-full shadow-lg opacity-0 pointer-events-none transition-all duration-300 flex items-center gap-2">
      <svg class="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      <span>Đã gửi lời chúc thành công!</span>
    </div>
  `;
}

export function setupModalHandlers() {
  window.openLightbox = (src) => {
    const modal = document.getElementById("lightboxModal");
    const img = document.getElementById("lightboxImg");
    img.src = src;
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100", "pointer-events-auto");
  };

  window.closeLightbox = () => {
    const modal = document.getElementById("lightboxModal");
    modal.classList.remove("opacity-100", "pointer-events-auto");
    modal.classList.add("opacity-0", "pointer-events-none");
  };

  window.showToast = (msg) => {
    const toast = document.getElementById("toast");
    if (msg) toast.querySelector("span").innerText = msg;
    toast.classList.remove("opacity-0", "pointer-events-none");
    toast.classList.add("opacity-100");
    setTimeout(() => {
      toast.classList.remove("opacity-100");
      toast.classList.add("opacity-0", "pointer-events-none");
    }, 2500);
  };

  document.getElementById("lightboxModal").addEventListener("click", (e) => {
    if (e.target.id === "lightboxModal") window.closeLightbox();
  });
}