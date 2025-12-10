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
    modalText.textContent = desc;

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
