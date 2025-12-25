// ============================
// CONFIGURACIÓN DE LA SECCIÓN
// ============================

// 🔥 músculo actual (prueba)
const currentMuscle = "pectoral";

// Título visible
const muscleTitles = {
  pectoral: "PECTORAL",
  espalda: "ESPALDA",
  hombro: "HOMBRO",
  pierna: "PIERNA",
  brazos: "BRAZOS"
};

// Pintar título
const sectionTitle = document.getElementById("sectionTitle");
if (sectionTitle) {
  sectionTitle.textContent = muscleTitles[currentMuscle] || "";
}

// ============================
// RENDER DE EJERCICIOS
// ============================

const grid = document.getElementById("exerciseGrid");

// Filtrar ejercicios por músculo
const filteredExercises = exercises.filter(
  ex => ex.muscle === currentMuscle
);

// Crear card
function createExerciseCard(ex) {
  const card = document.createElement("div");
  card.className = "exercise-card";

  // Datos para modales
  card.dataset.title = ex.title;
  card.dataset.desc = ex.desc;
  card.dataset.video = ex.video;

  card.innerHTML = `
    <h3 class="exercise-title">${ex.title}</h3>

    <div class="exercise-thumbnail">
      <img src="${ex.image}" alt="${ex.title}">
      <div class="thumbnail-hover">
        <button class="play-btn desktop-only">Reproducir</button>
      </div>
    </div>

    <div class="exercise-buttons">
      <button class="exercise-btn desc-btn">Ver descripción</button>
      <button class="video-btn play-btn-inline">Video</button>
    </div>
  `;

  return card;
}

// Pintar en el DOM
filteredExercises.forEach(ex => {
  grid.appendChild(createExerciseCard(ex));
});


const modal = document.getElementById("modalDesc");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModalBtn = document.querySelector(".close-modal");


document.querySelectorAll(".desc-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".exercise-card"); 

    const title = card.dataset.title;
    const desc = card.dataset.desc;

    modalTitle.textContent = title;
    modalText.innerHTML = desc;

    modal.style.display = "flex";
  });
});

// Cerrar modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar al hacer click fuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ============================
// MODAL VIDEO
// ============================
const modalVideo = document.getElementById("modalVideo");
const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");
const closeVideoBtn = document.querySelector(".close-video");

function openVideo(card) {
    const videoUrl = card.dataset.video;

    videoSource.src = videoUrl;
    videoPlayer.load();
    videoPlayer.play();
    modalVideo.style.display = "flex";
}

// Botones de vídeo (móvil + desktop)
document.querySelectorAll(".play-btn-inline, .play-btn.desktop-only").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();

        const card = btn.closest(".exercise-card");
        openVideo(card);
    });
});

// Cerrar modal vídeo
closeVideoBtn.addEventListener("click", () => {
    modalVideo.style.display = "none";
    videoPlayer.pause();
});

// Cerrar clicando fuera
modalVideo.addEventListener("click", (e) => {
    if (e.target === modalVideo) {
        modalVideo.style.display = "none";
        videoPlayer.pause();
    }
});
