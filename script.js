const music = document.getElementById("weddingMusic");
const navbar = document.querySelector(".bottom-navbar");
const guestName = document.getElementById("guestName");

/* =========================
LIST TAMU
========================= */

const guestList = {
  yasir: "Yasir Sopyan",
  andi: "Andi",
  riska: "Riska",
  budi: "Budi Santoso",
  siti: "Siti Nurhaliza",
  rahmat: "Rahmat",
  fitri: "Fitri",
  agus: "Agus",
  lina: "Lina",
  hendra: "Hendra",
  nur: "Nur",
  fajar: "Fajar",
  wati: "Wati",
  arman: "Arman",
  dewi: "Dewi",
  ikbal: "Ikbal",
  putri: "Putri",
  wahyu: "Wahyu",
  rina: "Rina",
  akbar: "Akbar",
  sari: "Sari",
  ilham: "Ilham",
  nanda: "Nanda",
  rudi: "Rudi",
  eva: "Eva",
  yanto: "Yanto",
  maya: "Maya",
  irwan: "Irwan",
  ani: "Ani",
  dika: "Dika",
  ayu: "Ayu",
  reza: "Reza",
  nisa: "Nisa",
  ali: "Ali",
  mia: "Mia",
  adit: "Adit",
  rara: "Rara",
  eko: "Eko",
  tika: "Tika",
  hafiz: "Hafiz",
  mila: "Mila",
  galih: "Galih",
  nia: "Nia",
  bayu: "Bayu",
  salsa: "Salsa",
  bagus: "Bagus",
  intan: "Intan",
  firman: "Firman",
  amel: "Amel",
  rian: "Rian"
};

/* =========================
NAMA TAMU
========================= */

const params = new URLSearchParams(window.location.search);
const guestKey = params.get("to");

if (guestName) {
  if (guestKey) {
    const cleanKey = guestKey.toLowerCase().trim();
    const cleanName = decodeURIComponent(guestKey)
      .replaceAll("-", " ")
      .replace(/\b\w/g, char => char.toUpperCase());

    guestName.innerText = guestList[cleanKey] || cleanName;
  } else {
    guestName.innerText = "Tamu Undangan";
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
"https://script.google.com/macros/s/AKfycbx0UrBEw3AuQVGOCsT9qp12LvuY7E7BoyQiH1Cd7qPJSOWssWdSoXfYzw5BQOAxawg/exec";

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

  const nameInput = document.getElementById("wishName");
  const statusInput = document.getElementById("wishStatus");
  const messageInput = document.getElementById("wishMessage");

  const nama = nameInput.value.trim();
  const status = statusInput.value;
  const ucapan = messageInput.value.trim();

  if(!nama || !status || !ucapan){
    alert("Nama, kehadiran, dan ucapan wajib diisi");
    return;
  }

  /* SIMPAN KE DATABASE */
  await fetch(SCRIPT_URL, {
    method:"POST",
    mode:"no-cors",
    body:JSON.stringify({
      nama:nama,
      status:status,
      ucapan:ucapan
    })
  });

  /* NOMOR WA KLIEN */
  const phone = "628xxxxxxxxxx";

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

  alert("Ucapan berhasil dikirim");

  setTimeout(loadWishes, 1500);
}

document.addEventListener("DOMContentLoaded", loadWishes);