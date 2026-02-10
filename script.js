// 3 секундийн дараа popup гарна
setTimeout(() => {
  const popup = document.getElementById("letterPopup");
  if (popup) popup.classList.remove("hidden");
}, 3000);

// Дугтуй нээх
function openEnvelope() {
  const envelope = document.getElementById("envelope");
  if (envelope && !envelope.classList.contains("open")) {
    envelope.classList.add("open");
  }
}

// Захианы хуудас солих
let currentPage = 0;
const pages = document.querySelectorAll(".letter-page");
const nextBtn = document.getElementById("nextBtn");

function nextPage(event) {
  event.stopPropagation(); 

  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");

    if (currentPage === pages.length - 1) {
      nextBtn.innerText = "Done";
    }
  } else {
    window.location.href = "music.html";
  }
}
