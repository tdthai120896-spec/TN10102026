(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const o={photo_hero:"/assets/photo_hero.jpg",photo_info_1:"/assets/photo_info_1.jpg",photo_info_2:"/assets/photo_info_2.jpg",photo_gallery_1:"/assets/photo_gallery_1.jpg",photo_gallery_2:"/assets/photo_gallery_2.jpg",photo_gallery_3:"/assets/photo_gallery_3.jpg",photo_gallery_4:"/assets/photo_gallery_4.jpg",photo_gallery_5:"/assets/photo_gallery_5.jpg",photo_location:"/assets/photo_location.jpg",photo_rsvp:"/assets/photo_rsvp.jpg"},g=new Date("2026-10-24T18:00:00").getTime(),c={fullName:"Nguyễn Tuệ Nhi",nickName:"Bé Bắp",partyDateString:"Chủ Nhật, ngày 18 tháng 10 năm 2026",partyTimeString:"Từ 12:00",locationName:"Trung Tâm Sự Kiện White Palace",locationAddress:"194 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh",googleMapsUrl:"https://maps.google.com/?q=White+Palace+Hoang+Van+Thu"},m=[{month:"Tháng 01",title:"Tiếng khóc đầu tiên",desc:"Ngày con cất tiếng khóc chào đời, cả thế giới của ba mẹ bỗng chốc thu bé lại vừa bằng một thiên thần nhỏ."},{month:"Tháng 03",title:"Nụ cười biết hóng chuyện",desc:"Con bắt đầu biết đưa mắt nhìn theo bóng mẹ, nở nụ cười toe toét đầu tiên mỗi khi nghe ba bi bô trò chuyện."},{month:"Tháng 06",title:"Chiếc răng sữa đầu đời",desc:"Mầm răng nhỏ xinh nhú lên khiến con ngứa nướu suốt ngày gặm nhấm đồ chơi, thích thú với từng thìa bột ăn dặm."},{month:"Tháng 09",title:"Những bước bò thoăn thoắt",desc:"Căn nhà rộn rã hẳn lên khi con bò khắp nơi khám phá thế giới, bám vào thành giường vịn đứng lên đầy tự hào."},{month:"Tháng 12",title:"Tròn một năm yêu thương",desc:"Con đã có thể chập chững những bước đi đầu tiên, bi bô gọi Ba, Mẹ. Chúc con gái yêu một đời bình an và hạnh phúc!"}];function x(){return`
    <header class="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav class="pointer-events-auto bg-white/95 backdrop-blur-xl border-2 border-theme-sage/20 shadow-xl rounded-full px-5 sm:px-6 py-2.5 flex items-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-theme-text transition-all">
        <a href="#hero" class="text-theme-sage font-bold tracking-tight text-sm hover:opacity-80">Tuệ Nhi • 1 Tuổi</a>
        
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
  `}function u(){return`
    <section id="hero" class="space-y-8 text-center reveal-item">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-theme-sage/10 text-theme-sage text-xs font-semibold tracking-wide border border-theme-sage/20">
        <span class="w-2 h-2 rounded-full bg-theme-sage animate-pulse"></span>
        TIỆC THÔI NÔI • 1ST BIRTHDAY CELEBRATION
      </div>

      <div class="space-y-3">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-theme-text">
          ${c.fullName}
        </h1>
        <p class="text-base sm:text-lg text-theme-secondary font-light">
          Tròn 1 tuổi đầy ắp nụ cười • Tên ở nhà: <span class="font-semibold text-theme-gold">${c.nickName}</span>
        </p>
      </div>

      <!-- Banner Ảnh Ngang Full -->
      <div class="relative w-full rounded-apple-banner overflow-hidden shadow-xl border border-theme-sage/20 group cursor-pointer" onclick="window.openLightbox('${o.photo_hero}')">
        <img 
          src="${o.photo_hero}" 
          alt="Hero Baby" 
          class="w-full h-auto max-h-[550px] object-cover transition-transform duration-700 ease-out group-hover:scale-102"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-theme-text/50 via-transparent to-transparent"></div>
        <div class="absolute bottom-5 left-6 text-left text-white">
          <span class="text-xs uppercase tracking-widest font-semibold text-theme-gold-light opacity-95">Milestone 1 Year</span>
          <p class="text-base sm:text-lg font-medium">Chào đón tuổi mới thật nhiều niềm vui</p>
        </div>
      </div>

      <!-- Apple Widget Countdown Tone Vàng & Xanh -->
      <div class="pt-2">
        <div class="inline-grid grid-cols-4 gap-2.5 sm:gap-4 p-3.5 rounded-apple-card glass-warm border border-theme-gold-border shadow-lg">
          <div class="w-16 sm:w-20 py-2.5 rounded-2xl bg-white/80 border border-theme-sage/10 text-center">
            <span id="days" class="block text-xl sm:text-2xl font-bold text-theme-text tracking-tight">00</span>
            <span class="text-[10px] text-theme-secondary uppercase font-semibold">Ngày</span>
          </div>
          <div class="w-16 sm:w-20 py-2.5 rounded-2xl bg-white/80 border border-theme-sage/10 text-center">
            <span id="hours" class="block text-xl sm:text-2xl font-bold text-theme-text tracking-tight">00</span>
            <span class="text-[10px] text-theme-secondary uppercase font-semibold">Giờ</span>
          </div>
          <div class="w-16 sm:w-20 py-2.5 rounded-2xl bg-white/80 border border-theme-sage/10 text-center">
            <span id="minutes" class="block text-xl sm:text-2xl font-bold text-theme-text tracking-tight">00</span>
            <span class="text-[10px] text-theme-secondary uppercase font-semibold">Phút</span>
          </div>
          <div class="w-16 sm:w-20 py-2.5 rounded-2xl bg-white/80 border border-theme-sage/10 text-center">
            <span id="seconds" class="block text-xl sm:text-2xl font-bold text-theme-text tracking-tight">00</span>
            <span class="text-[10px] text-theme-secondary uppercase font-semibold">Giây</span>
          </div>
        </div>
      </div>
    </section>
  `}function b(){return`
    <section id="story" class="space-y-16">
      
      <!-- Bức thư tâm tình của Ba & Mẹ -->
      <div class="reveal-item text-center max-w-2xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest font-semibold text-theme-sage">Lời Nhắn Nhủ Yêu Thương</span>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-theme-text">Gửi Thiên Thần Nhỏ Của Ba Mẹ</h2>
        <div class="w-16 h-[2px] bg-theme-gold mx-auto rounded-full"></div>
        <p class="text-sm sm:text-base text-theme-secondary leading-relaxed font-normal italic pt-2 px-2">
          "365 ngày qua là một hành trình diệu kỳ. Cảm ơn con đã đến và mang theo cả bầu trời hạnh phúc, biến căn nhà nhỏ của ba mẹ luôn đầy ắp tiếng cười giòn tan. Chúc con gái yêu một đời bình an, hồn nhiên và luôn được yêu thương che chở."
        </p>
      </div>

      <!-- Ý nghĩa tên của bé & Khổ thơ kỷ niệm -->
      <div class="reveal-item grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="glass-warm p-7 rounded-apple-card border border-theme-sage/20 space-y-3">
          <span class="text-xs font-bold text-theme-gold uppercase tracking-wider">Ý Nghĩa Tên Con</span>
          <h3 class="text-xl font-serif font-bold text-theme-text">Nguyễn Tuệ Nhi (Bé Bắp)</h3>
          <p class="text-xs sm:text-sm text-theme-secondary leading-relaxed">
            <strong>"Tuệ"</strong> là trí tuệ, thông minh, sáng dạ.<br>
            <strong>"Nhi"</strong> là cô con gái nhỏ bé bỏng, đáng yêu.<br>
            Ba mẹ mong con sau này lớn lên sẽ là một cô gái giàu lòng nhân ái, hiểu biết và có cuộc đời an yên như hạt bắp vàng ngọt ngào.
          </p>
        </div>

        <div class="glass-warm p-7 rounded-apple-card border border-theme-sage/20 space-y-3 flex flex-col justify-center">
          <span class="text-xs font-bold text-theme-sage uppercase tracking-wider">Thơ Mừng Thôi Nôi</span>
          <p class="text-xs sm:text-sm text-theme-text font-serif italic leading-relaxed">
            "Mười hai tháng trọn đầu đời,<br>
            Nụ cười con hé rạng ngời nắng mai.<br>
            Mai này khôn lớn đường dài,<br>
            Bình an, hạnh phúc nối hoài cùng con."
          </p>
          <div class="text-right text-xs font-cursive text-theme-gold text-lg">- Yêu con thật nhiều -</div>
        </div>
      </div>

      <!-- Timeline 12 tháng đầu đời -->
      <div class="reveal-item glass-warm rounded-apple-banner p-6 sm:p-10 border border-theme-sage/20 space-y-8">
        <div class="text-center space-y-1">
          <span class="text-xs uppercase tracking-widest font-semibold text-theme-gold">First 365 Days</span>
          <h3 class="text-xl sm:text-2xl font-serif font-bold text-theme-text">Hành Trình 365 Ngày Đầu Đời Của Bé</h3>
          <p class="text-xs text-theme-secondary">Từng bước ngoặt nhỏ ghi dấu sự lớn khôn của con gái</p>
        </div>

        <div class="relative border-l-2 border-theme-gold/40 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          ${m.map(e=>`
            <div class="relative group">
              <div class="absolute -left-[31px] sm:-left-[39px] top-0.5 w-4 h-4 rounded-full bg-white border-4 border-theme-sage shadow-md"></div>
              
              <div class="space-y-1">
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-theme-gold-light text-theme-gold text-[11px] font-bold border border-theme-gold-border">
                  ${e.month}
                </span>
                <h4 class="text-base font-bold text-theme-text">${e.title}</h4>
                <p class="text-xs sm:text-sm text-theme-secondary leading-relaxed">${e.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

    </section>
  `}function v(){return`
    <section id="info" class="space-y-6 reveal-on-scroll">
      <div class="text-center space-y-1">
        <h2 class="text-xs uppercase tracking-widest font-semibold text-apple-sage">Thông Tin Của Bé</h2>
        <p class="text-2xl sm:text-3xl font-bold tracking-tight text-apple-text">Chỉ Số Vui Nhộn & Tính Cách</p>
      </div>

      <!-- Bento Grid Apple -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
        <!-- Ảnh Đứng 1 (4:5) -->
        <div class="md:col-span-4 rounded-apple-card overflow-hidden shadow-apple-card border border-black/5 aspect-4-5 relative group cursor-pointer" onclick="window.openLightbox('${o.photo_info_1}')">
          <img 
            src="${o.photo_info_1}" 
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
              <span class="text-3xl font-bold text-apple-text tracking-tight">6</span>
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
        <div class="md:col-span-4 rounded-apple-card overflow-hidden shadow-apple-card border border-black/5 aspect-4-5 relative group cursor-pointer" onclick="window.openLightbox('${o.photo_info_2}')">
          <img 
            src="${o.photo_info_2}" 
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
  `}function f(){return`
    <section id="gallery" class="space-y-8">
      <div class="text-center space-y-2 reveal-item">
        <span class="text-xs uppercase tracking-widest font-semibold text-theme-sage">Bộ Sưu Tập Kỷ Niệm</span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-theme-text">Từng Khoảnh Khắc Lớn Khôn</h2>
        <p class="text-xs text-theme-secondary font-light">Chạm vào từng bức ảnh để ngắm nhìn bé sắc nét hơn</p>
      </div>

      <!-- Lưới Full Ảnh Không Bị Cắt (Natural Aspect-Ratio) -->
      <div class="space-y-6">
        
        <!-- Hàng 1: 1 Ảnh ngang Banner lớn trọn vẹn -->
        <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${o.photo_gallery_1}')">
          <img src="${o.photo_gallery_1}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.01] transition-transform duration-500" alt="Khoảnh khắc 1" />
        </div>

        <!-- Hàng 2: 2 Ảnh đứng Song Song Hiển Thị Trọn Vẹn -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${o.photo_gallery_4}')">
            <img src="${o.photo_gallery_4}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.02] transition-transform duration-500" alt="Khoảnh khắc 4" />
          </div>
          <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${o.photo_gallery_5}')">
            <img src="${o.photo_gallery_5}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.02] transition-transform duration-500" alt="Khoảnh khắc 5" />
          </div>
        </div>

        <!-- Hàng 3: 2 Ảnh Ngang Đặt Liền Nhau Trọn Vẹn -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${o.photo_gallery_2}')">
            <img src="${o.photo_gallery_2}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.02] transition-transform duration-500" alt="Khoảnh khắc 2" />
          </div>
          <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${o.photo_gallery_3}')">
            <img src="${o.photo_gallery_3}" class="w-full h-auto rounded-2xl object-contain group-hover:scale-[1.02] transition-transform duration-500" alt="Khoảnh khắc 3" />
          </div>
        </div>

      </div>
    </section>
  `}function y(){return`
    <section id="party" class="space-y-8">
      <div class="text-center space-y-2 reveal-item">
        <span class="text-xs uppercase tracking-widest font-semibold text-theme-sage">Thông Tin Buổi Tiệc</span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-theme-text">Thời Gian & Địa Điểm</h2>
        <p class="text-xs text-theme-secondary font-light">Sự hiện diện của quý quan khách là niềm vinh hạnh to lớn của gia đình</p>
      </div>

      <!-- Banner Địa điểm Ngang Full Ảnh -->
      <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-xl" onclick="window.openLightbox('${o.photo_location}')">
        <div class="relative rounded-2xl overflow-hidden">
          <img src="${o.photo_location}" alt="Party Location" class="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div>
              <span class="text-xs text-emerald-300 font-semibold uppercase tracking-wider">Hân hạnh đón tiếp</span>
              <h3 class="text-xl sm:text-2xl font-bold">${c.locationName}</h3>
              <p class="text-xs opacity-90 mt-1">${c.locationAddress}</p>
            </div>
            <a href="${c.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="bg-white/90 text-theme-text px-4 py-2 rounded-full text-xs font-semibold hover:bg-white transition-all flex items-center gap-1.5 shadow-md">
              <span>Chỉ đường Google Maps</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Thẻ Thời gian & Dresscode -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="reveal-item p-7 rounded-apple-card glass-warm border border-theme-sage/20 space-y-3">
          <div class="w-10 h-10 rounded-2xl bg-theme-sage-light text-theme-sage flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          </div>
          <h4 class="text-xs font-bold text-theme-secondary uppercase tracking-wide">Thời Gian Diễn Ra</h4>
          <p class="text-lg font-bold text-theme-text">${c.partyDateString}</p>
          <p class="text-sm font-semibold text-theme-gold">${c.partyTimeString}</p>
          <p class="text-xs text-theme-secondary pt-2 border-t border-black/5 leading-relaxed">
            • 18:00 - Đón khách & chụp ảnh lưu niệm cùng bé<br>
            • 19:00 - Bắt đầu nghi thức thôi nôi & dùng tiệc
          </p>
        </div>

        <div class="reveal-item p-7 rounded-apple-card glass-warm border border-theme-sage/20 space-y-3">
          <div class="w-10 h-10 rounded-2xl bg-theme-gold-light text-theme-gold flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
          </div>
          <h4 class="text-xs font-bold text-theme-secondary uppercase tracking-wide">Trang Phục Gợi Ý</h4>
          <p class="text-sm text-theme-text font-medium">Tone màu trang nhã, ấm cúng theo chủ đề:</p>
          
          <div class="flex items-center gap-4 pt-1">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-[#5F7A64] shadow-sm"></span>
              <span class="text-xs font-semibold text-theme-text">Xanh Sage</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-[#E5D4B3] shadow-sm"></span>
              <span class="text-xs font-semibold text-theme-text">Vàng Kem</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-[#FFFFFF] border border-black/10 shadow-sm"></span>
              <span class="text-xs font-semibold text-theme-text">Trắng</span>
            </div>
          </div>
          <p class="text-[11px] text-theme-secondary pt-1 leading-relaxed">
            * Sảnh tiệc có hỗ trợ bãi đỗ xe ô tô và xe máy thuận tiện tại tầng hầm.
          </p>
        </div>
      </div>
    </section>
  `}function w(){return`
    <section id="rsvp" class="space-y-8">
      <div class="text-center space-y-2 reveal-item">
        <span class="text-xs uppercase tracking-widest font-semibold text-theme-sage">Sổ Lưu Bút Kỷ Niệm</span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-theme-text">Gửi Lời Chúc Đến Bé</h2>
        <p class="text-xs text-theme-secondary font-light">Tình yêu thương của ông bà, cô chú là món quà quý giá nhất dành cho bé</p>
      </div>

      <!-- Banner RSVP hiển thị trọn vẹn -->
      <div class="reveal-item rounded-apple-banner overflow-hidden glass-warm p-2 border border-theme-sage/20 cursor-pointer group shadow-lg" onclick="window.openLightbox('${o.photo_rsvp}')">
        <img src="${o.photo_rsvp}" alt="RSVP Photo" class="w-full h-auto rounded-2xl object-contain" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <!-- Form gửi lời chúc -->
        <div class="reveal-item md:col-span-6 p-6 sm:p-7 rounded-apple-card glass-warm border border-theme-sage/20 space-y-4">
          <h3 class="text-base font-bold text-theme-text">Gửi Lời Yêu Thương</h3>
          <form id="wishForm" class="space-y-3.5">
            <div>
              <label class="block text-xs font-semibold text-theme-secondary mb-1">Tên của bạn / Gia đình:</label>
              <input type="text" id="guestName" required placeholder="Ví dụ: Dì Út, Gia đình Bác Nam..." class="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-theme-sage/20 text-sm focus:outline-none focus:ring-2 focus:ring-theme-sage/40 transition-all" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-theme-secondary mb-1">Lời chúc dành cho bé:</label>
              <textarea id="guestMessage" required rows="3" placeholder="Chúc bé luôn mạnh khoẻ, chăm ngoan và rạng rỡ..." class="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-theme-sage/20 text-sm focus:outline-none focus:ring-2 focus:ring-theme-sage/40 transition-all"></textarea>
            </div>
            <button type="submit" class="w-full py-3 rounded-full bg-theme-sage text-white text-xs font-semibold hover:bg-opacity-95 active:scale-95 transition-all shadow-md">
              Gửi Lời Chúc Cho Bé
            </button>
          </form>
        </div>

        <!-- Danh sách lời chúc -->
        <div class="reveal-item md:col-span-6 p-6 sm:p-7 rounded-apple-card glass-warm border border-theme-sage/20 space-y-4">
          <div class="flex justify-between items-center">
            <h3 class="text-base font-bold text-theme-text">Lời Chúc Đã Gửi</h3>
            <span id="wishCountBadge" class="text-xs text-theme-gold font-semibold">0 lời chúc</span>
          </div>
          <div id="wishesList" class="space-y-3 max-h-[320px] overflow-y-auto pr-1"></div>
        </div>
      </div>
    </section>
  `}function T(){return`
    <footer class="text-center pt-10 pb-6 border-t border-black/5 space-y-4">
      <div class="max-w-md mx-auto space-y-2">
        <h3 class="text-base font-bold text-apple-text">Lời Tri Ân Từ Ba Mẹ Bé</h3>
        <p class="text-xs text-apple-secondary leading-relaxed">
          "Cảm ơn ông bà, cô chú, bác và bạn bè đã luôn dành tình cảm yêu thương che chở cho bé trong suốt 1 năm đầu đời. Sự hiện diện của mọi người là món quà ý nghĩa nhất đối với gia đình chúng mình."
        </p>
      </div>
      <div class="pt-4 text-[11px] text-apple-secondary/70">
        Crafted with Apple Elegance for Bé ${c.nickName} • 2026
      </div>
    </footer>
  `}function k(){return`
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
  `}function _(){window.openLightbox=e=>{const t=document.getElementById("lightboxModal"),a=document.getElementById("lightboxImg");a.src=e,t.classList.remove("opacity-0","pointer-events-none"),t.classList.add("opacity-100","pointer-events-auto")},window.closeLightbox=()=>{const e=document.getElementById("lightboxModal");e.classList.remove("opacity-100","pointer-events-auto"),e.classList.add("opacity-0","pointer-events-none")},window.showToast=e=>{const t=document.getElementById("toast");e&&(t.querySelector("span").innerText=e),t.classList.remove("opacity-0","pointer-events-none"),t.classList.add("opacity-100"),setTimeout(()=>{t.classList.remove("opacity-100"),t.classList.add("opacity-0","pointer-events-none")},2500)},document.getElementById("lightboxModal").addEventListener("click",e=>{e.target.id==="lightboxModal"&&window.closeLightbox()})}let d=!1;window.toggleMusic=function(){const e=document.getElementById("bgMusic"),t=document.getElementById("musicIconWrapper"),a=document.getElementById("musicStatusText");d?(e.pause(),d=!1,t.classList.remove("animate-spin-music"),a.innerText="Phát Nhạc"):e.play().then(()=>{d=!0,t.classList.add("animate-spin-music"),a.innerText="Tắt Nhạc"}).catch(r=>console.log("Trình duyệt yêu cầu tương tác:",r))};function B(){const e=()=>{d||window.toggleMusic(),document.removeEventListener("click",e),document.removeEventListener("scroll",e)};document.addEventListener("click",e,{once:!0}),document.addEventListener("scroll",e,{once:!0})}function L(){function e(){const t=g-new Date().getTime();if(t<=0)return;const a=Math.floor(t/(1e3*60*60*24)),r=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(t%(1e3*60*60)/(1e3*60)),n=Math.floor(t%(1e3*60)/1e3),i=document.getElementById("days"),l=document.getElementById("hours"),h=document.getElementById("minutes"),p=document.getElementById("seconds");i&&(i.innerText=String(a).padStart(2,"0")),l&&(l.innerText=String(r).padStart(2,"0")),h&&(h.innerText=String(s).padStart(2,"0")),p&&(p.innerText=String(n).padStart(2,"0"))}e(),setInterval(e,1e3)}function N(){const e=[{name:"Ông Bà Ngoại",message:"Chúc bé cưng của ông bà mau ăn chóng lớn, luôn tươi cười và bình an!",time:"Hôm nay"},{name:"Cô Phương Thảo",message:"Mừng thôi nôi thiên thần nhỏ! Chúc con cả đời rực rỡ và hạnh phúc.",time:"Hôm qua"}];function t(){const s=localStorage.getItem("baby_wishes");return s?JSON.parse(s):e}function a(){const s=t(),n=document.getElementById("wishesList"),i=document.getElementById("wishCountBadge");n&&(i.innerText=`${s.length} lời chúc`,n.innerHTML=s.map(l=>`
      <div class="p-3.5 rounded-xl bg-white/80 border border-theme-sage/10 space-y-1 text-left">
        <div class="flex justify-between items-center">
          <span class="text-xs font-semibold text-theme-text">${l.name}</span>
          <span class="text-[10px] text-theme-secondary">${l.time||"Vừa xong"}</span>
        </div>
        <p class="text-xs text-theme-secondary leading-relaxed">${l.message}</p>
      </div>
    `).join(""))}a();const r=document.getElementById("wishForm");r&&r.addEventListener("submit",s=>{s.preventDefault();const n=document.getElementById("guestName"),i=document.getElementById("guestMessage");if(!n.value.trim()||!i.value.trim())return;const l=t();l.unshift({name:n.value.trim(),message:i.value.trim(),time:"Vừa xong"}),localStorage.setItem("baby_wishes",JSON.stringify(l)),a(),n.value="",i.value="",window.showToast("Cảm ơn bạn đã gửi lời chúc ý nghĩa!")})}function S(){const e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&a.target.classList.add("is-visible")})},{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".reveal-item").forEach(t=>e.observe(t))}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("navbar-root").innerHTML=x(),document.getElementById("app").innerHTML=`
    ${u()}
    ${b()}
    ${v()}
    ${f()}
    ${y()}
    ${w()}
    ${T()}
  `,document.getElementById("modals-root").innerHTML=k(),_(),L(),N(),S(),B()});
