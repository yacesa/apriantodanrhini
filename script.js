const music = document.getElementById("weddingMusic");
const navbar = document.querySelector(".bottom-navbar");
const guestName = document.getElementById("guestName");

/* =========================
LIST TAMU
========================= */

const guestList = {
  ana: "Ana",
  mrizal: "M Rizal & Silvana",
  supriyanto: "Supriyanto & Feni",
  puput: "Puput",
  ady: "Ady",
  adrianhasa: "Adrian Hasa",
  lalang: "Lalang",
  pikar: "Pikar",
  dinanurjanah: "Dina Nurjanah S.Pd",
  ratikahar: "Rati Kahar S.Pd",
  kasri: "KA Sri",
  mira: "Mira",
  asmini: "Asmini & Suami",
  aisyahpmr: "Aisyah/PMR",
  alumnisma1momunu: "Alumni SMA Negri 1 Momunu",
  alumnimtsn3buol: "Alumni Mts N 3 Buol",
  fraldo: "Fraldo",
  nurmita: "Nurmita",
  lisa: "Lisa",
  bidanpkm: "Bidan Bidan PKM Momunu",
  alumnismp1momunu: "Alumni SMP N 1 Momunu",
  feniarahmad: "Feniar S. Ahmad",
  anggi: "Anggi",
  tika: "Tika",
  rafliibrahim: "Rafli Ibrahim",
  nurhayati: "Nurhayati & Suami",
  maya: "Maya",
  karina: "Karina",
  fenty: "Fenty & Pasangan",
  adeavriliani: "Ade Avriliani & Pasangan",
  zafira: "Zafira & Pasangan",
  afniantu: "Afni A. Antu",
  susanti: "Susanti A.Md. Keb & Zulfikar",
  fitri: "Fitri",
  wirdaningsih: "WirdaNingsih & Suami",
  nursafitri: "NurSafitri & Pasangan",
  keluargaparigi: "Keluarga di Parigi",
  yantitimumun: "Yanti d Timumun & Pasangan",
  kariman: "Kariman & Pasangan",
  mamafarisa: "Mama Farisa & Keluarga",
  anto: "Anto & Istri",
  sintahadu: "Sinta S.Hadu & Suami",
  jayadi: "Jayadi",
  mutmainah: "Mutmainah & Suami",
  zilhana: "Zilhana",
  sarahsalsa: "Sarah Salsa Sabila",
  febi: "Febi",
  alfandi: "Alfandi & Istri",
  martinalihawa: "Martina Lihawa S.Pd",
  topanhidayat: "Topan Hidayat"
};

/* =========================
NAMA TAMU
========================= */

const params = new URLSearchParams(window.location.search);
const guestKey = params.get("to");

if (guestName) {

  if (guestKey) {

    const cleanKey =
      guestKey.toLowerCase().trim();

    // AMBIL NAMA DARI guestList
    const realName =
      guestList[cleanKey];

    // JIKA ADA &
    if (realName && realName.includes("&")) {

      const splitName =
        realName.split("&");

      guestName.innerHTML = `
        ${splitName[0].trim()}
        <br>
        &
        <br>
        ${splitName[1].trim()}
      `;

    } else {

      guestName.innerHTML =
        realName || "Tamu Undangan";

    }

  } else {

    guestName.innerHTML =
      "Tamu Undangan";

  }

}

/* =========================
BUKA COVER 1 KE COVER 2
========================= */

function openGate() {
  const coverOne = document.getElementById("coverOne");
  const coverTwo = document.getElementById("coverTwo");
  const coverTwoVideo = document.getElementById("coverTwoVideo");
  const coverContent = document.getElementById("coverContent");
  const coverTwoBtn = document.getElementById("coverTwoBtn");
  const openBtn = document.getElementById("openBtn");

  if (openBtn) {
    openBtn.classList.add("hide");
  }

  if (coverContent) {
    coverContent.classList.add("hide");
  }

  if (music) {
    music.play().catch(() => {});
  }

  setTimeout(() => {
    if (coverOne) {
      coverOne.classList.add("opening");
      coverOne.style.pointerEvents = "none";
    }
  }, 250);

  setTimeout(() => {
    if (coverOne) {
      coverOne.style.display = "none";
    }

    if (coverTwo) {
      coverTwo.style.display = "flex";
      coverTwo.classList.add("active");
      coverTwo.style.opacity = "1";
      coverTwo.style.pointerEvents = "auto";
    }

    if (coverTwoVideo) {
      coverTwoVideo.currentTime = 0;
      coverTwoVideo.play().catch(() => {});
    }

    if (coverTwoBtn) {
      coverTwoBtn.classList.remove("show");

      setTimeout(() => {
        coverTwoBtn.classList.add("show");
      }, 3000);
    }
  }, 1200);
}

/* =========================
BUKA ISI UNDANGAN
========================= */

function showInvitation() {
  const coverTwo = document.getElementById("coverTwo");
  const coverTwoVideo = document.getElementById("coverTwoVideo");
  const invitation = document.getElementById("invitation");

  if (coverTwo) {
    coverTwo.style.opacity = "0";
    coverTwo.style.pointerEvents = "none";
  }

  setTimeout(() => {
    if (coverTwoVideo) {
      coverTwoVideo.pause();
    }

    if (coverTwo) {
      coverTwo.style.display = "none";
    }

    if (invitation) {
      invitation.style.display = "block";
      invitation.style.opacity = "1";
    }

    if (navbar) {
      navbar.classList.add("show");
    }

    if (music) {
      music.play().catch(() => {});
    }
  }, 600);
}

/* =========================
MUSIC
========================= */

function toggleMusic() {
  if (!music) return;

  if (music.paused) {
    music.play().catch(() => {});
  } else {
    music.pause();
  }
}

/* =========================
COUNTDOWN
========================= */

const targetDate = new Date("June 1, 2026 09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  if (distance <= 0) {
    if (days) days.innerText = "0";
    if (hours) hours.innerText = "0";
    if (minutes) minutes.innerText = "0";
    if (seconds) seconds.innerText = "0";
    return;
  }

  if (days) {
    days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  }

  if (hours) {
    hours.innerText = Math.floor((distance / (1000 * 60 * 60)) % 24);
  }

  if (minutes) {
    minutes.innerText = Math.floor((distance / (1000 * 60)) % 60);
  }

  if (seconds) {
    seconds.innerText = Math.floor((distance / 1000) % 60);
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =========================
KIRIM UCAPAN KE WA
========================= */

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzjxxhgBz5L1ybLIhIUgJaPFMKPG9KsXSzN-X9ZJGw7sQmhtChG9EGyszpJb_MkBooG/exec";

function loadWishes(){

  const wishList = document.getElementById("wishList");
  if(!wishList) return;

  wishList.innerHTML = `<p class="empty-wish">Memuat ucapan...</p>`;

  const oldScript = document.getElementById("jsonpWishes");
  if(oldScript) oldScript.remove();

  window.showWishes = function(data){

    wishList.innerHTML = "";

    if(!data || data.length === 0){
      wishList.innerHTML = `<p class="empty-wish">Belum ada ucapan.</p>`;
      return;
    }

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "wish-item";

      card.innerHTML = `
        <h4>${item.nama || "Tamu Undangan"}</h4>
        <span>${item.status || "-"}</span>
        <p>${item.ucapan || ""}</p>
      `;

      wishList.appendChild(card);
    });
  };

  const script = document.createElement("script");
  script.id = "jsonpWishes";
  script.src = SCRIPT_URL + "?callback=showWishes";
  script.onerror = function(){
    wishList.innerHTML = `<p class="empty-wish">Ucapan gagal dimuat.</p>`;
  };

  document.body.appendChild(script);
}

async function sendWish(){

  const btn =
    document.querySelector(".rsvp-btn");

  if(btn.classList.contains("loading"))
    return;

  btn.classList.add("loading");
  btn.innerHTML = `
    <i class="fa-solid fa-spinner fa-spin"></i>
    Mengirim...
  `;

  const nameInput =
    document.getElementById("wishName");

  const statusInput =
    document.getElementById("wishStatus");

  const messageInput =
    document.getElementById("wishMessage");

  const nama = nameInput.value.trim();
  const status = statusInput.value;
  const ucapan = messageInput.value.trim();

  if(!nama || !status || !ucapan){

    alert(
      "Nama, kehadiran, dan ucapan wajib diisi"
    );

    btn.classList.remove("loading");

    btn.innerHTML = `
      <i class="fa-brands fa-whatsapp"></i>
      Kirim Ucapan
    `;

    return;
  }

  await fetch(SCRIPT_URL,{
    method:"POST",
    mode:"no-cors",
    body:JSON.stringify({
      nama:nama,
      status:status,
      ucapan:ucapan
    })
  });

  const phone = "6285274015332";

  const waText =
`Wedding Apri & Rhini

Nama:
${nama}

Konfirmasi:
${status}

Ucapan:
${ucapan}`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(waText)}`,
    "_blank"
  );

  nameInput.value = "";
  statusInput.value = "";
  messageInput.value = "";

  btn.innerHTML = `
    <i class="fa-solid fa-check"></i>
    Berhasil Terkirim
  `;

  setTimeout(()=>{

    btn.classList.remove("loading");

    btn.innerHTML = `
      <i class="fa-brands fa-whatsapp"></i>
      Kirim Ucapan
    `;

  },3000);

  setTimeout(loadWishes,1500);
}

document.addEventListener("DOMContentLoaded", loadWishes);