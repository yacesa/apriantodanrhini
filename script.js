const music = document.getElementById("weddingMusic");
const navbar = document.querySelector(".bottom-navbar");
const guestName = document.getElementById("guestName");

/* =========================
LIST TAMU
Link contoh:
index.html?to=yasir
index.html?to=Yasir-Sopyan
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
NAMA TAMU DARI LINK
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
OPEN COVER 1 VIDEO
========================= */

function openGate() {
  const coverOne = document.getElementById("coverOne");
  const coverTwo = document.getElementById("coverTwo");
  const coverVideo = document.getElementById("coverVideo");
  const coverTwoVideo = document.getElementById("coverTwoVideo");
  const coverContent = document.getElementById("coverContent");
  const coverTwoBtn = document.getElementById("coverTwoBtn");
  const openBtn = document.getElementById("openBtn");

  if (openBtn) {
    openBtn.classList.add("hide");
  }

  if (coverContent) {
    setTimeout(() => {
      coverContent.classList.add("hide");
    }, 250);
  }

  if (music) {
    music.play().catch(() => {});
  }

  if (coverTwoVideo) {
    coverTwoVideo.pause();
    coverTwoVideo.currentTime = 0;
  }

  if (coverVideo) {
    coverVideo.currentTime = 0;
    coverVideo.play().catch(() => {
      goToCoverTwo();
    });

    coverVideo.onended = () => {
      goToCoverTwo();
    };
  } else {
    goToCoverTwo();
  }

  function goToCoverTwo() {
  if (coverOne) {
    coverOne.style.opacity = "0";
    coverOne.style.pointerEvents = "none";
  }

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
  }, 450);
}
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