// Mapping 11 ảnh trong thư mục public/assets/
export const IMAGE_ASSETS = {
  photo_hero: "/assets/photo_hero.jpg",
  photo_info_1: "/assets/photo_info_1.jpg",
  photo_info_2: "/assets/photo_info_2.jpg",
  photo_gallery_1: "/assets/photo_gallery_1.jpg",
  photo_gallery_2: "/assets/photo_gallery_2.jpg",
  photo_gallery_3: "/assets/photo_gallery_3.jpg",
  photo_gallery_4: "/assets/photo_gallery_4.jpg",
  photo_gallery_5: "/assets/photo_gallery_5.jpg",
  photo_gallery_6: "/assets/photo_gallery_6.jpg", // Tấm ảnh ngang mới thêm
  photo_location: "/assets/photo_location.jpg",
  photo_rsvp: "/assets/photo_rsvp.jpg"
};

// Cập nhật mốc đếm ngược: 17:30 ngày 31/10/2026
export const PARTY_DATE = new Date("2026-10-31T17:30:00").getTime();

export const BABY_CONFIG = {
  fullName: "Huỳnh Lê Khả Hân",
  nickName: "Bé Bắp",
  partyDateString: "Thứ Bảy, ngày 31 tháng 10 năm 2026",
  partyTimeString: "17:30 - 21:00",
  locationName: "Sunny Farm Coffee and BBQ",
  locationAddress: "173/1b Bình Lợi, Bình Lợi Trung, TP. Hồ Chí Minh",
  googleMapsUrl: "https://maps.app.goo.gl/bY7vDqPkhYL93D9d6"
};

// Hành trình 12 tháng đầu đời của Khả Hân
export const TIMELINE_STORY = [
  {
    month: "Tháng 01",
    title: "Tiếng khóc đầu tiên",
    desc: "Ngày con cất tiếng khóc chào đời, cả thế giới của ba mẹ bỗng chốc thu bé lại vừa bằng một thiên thần nhỏ bé bỏng."
  },
  {
    month: "Tháng 03",
    title: "Nụ cười biết hóng chuyện",
    desc: "Khả Hân bắt đầu biết nhìn theo bóng mẹ, nở nụ cười toe toét đầu tiên mỗi khi nghe ba bi bô trò chuyện."
  },
  {
    month: "Tháng 06",
    title: "Chiếc răng sữa đầu đời",
    desc: "Mầm răng nhỏ xinh nhú lên khiến con thích thú gặm nhấm đồ chơi và hào hứng với từng thìa bột ăn dặm đầu đời."
  },
  {
    month: "Tháng 09",
    title: "Những bước bò thoăn thoắt",
    desc: "Căn nhà rộn rã hẳn lên khi con bò khắp nơi khám phá thế giới, bám vào thành giường vịn đứng lên đầy tự hào."
  },
  {
    month: "Tháng 12",
    title: "Tròn một năm yêu thương",
    desc: "Con đã có thể chập chững những bước đi đầu tiên, bi bô gọi Ba, Mẹ. Chúc Khả Hân một đời bình an, rạng rỡ và hạnh phúc!"
  }
];