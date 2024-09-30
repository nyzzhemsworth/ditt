// settings.js

// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/profile.jpg", // Path ke favicon
  title: "Ditt | Profile", // Judul halaman
  metaTitle: "Ditt || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website Ditt", // Deskripsi meta untuk SEO
  metaKeywords: "Ziell, ziell.xml, profile ziell, siapa ziell?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "media/profile.jpg", // Path ke gambar profil
  name: "Ditt Shepherd", // Nama profil
  occupation: "Always", // Pekerjaan atau jabatan
  location: "Tangerang, Jawa Barat, Indonesia", // Lokasi
  backgroundImage: "media/background.jpg", // Latar belakang halaman
  links: [
    { title: "TikTok", url: "https://tiktok.com/@dittstepherd", icon: "fa-tiktok" }, // Tautan GitHub
    { title: "Instagram", url: "https://www.instagram.com/dittgyllen_", icon: "fa-instagram" }, // Tautan Instagram// Tautan Telegram
    { title: "WhatsApp", url: "https://wa.me/6281311512335?text=hai", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { title: "My Channel", url: "https://whatsapp.com/channel/0029VagpakvFMqraXRFX0z0D", icon: "fa-whatsapp" } // Tautan YouTube
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur lokasi
document.getElementById('location').innerHTML = `<i class="fa fa-map-marker icon" aria-hidden="true"></i> ${profileSettings.location}`;

// Mengatur gambar latar belakang
document.body.style.backgroundImage = `url("${profileSettings.backgroundImage}")`;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  const linkElement = document.createElement('a');
  linkElement.href = link.url;
  linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
  linkBoxes.appendChild(linkElement);
});
