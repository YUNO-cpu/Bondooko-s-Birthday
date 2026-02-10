// 4 секундийн дараа popup гарна
setTimeout(() => {
  const popup = document.getElementById("letterPopup");
  popup.classList.remove("hidden");
}, 4000);

// Дугтуй нээх
function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  if (!envelope.classList.contains("open")) {
    envelope.classList.add("open");
  }
}

// Захианы хуудас солих
let currentPage = 0;
const pages = document.querySelectorAll(".letter-page");
const nextBtn = document.getElementById("nextBtn");

function nextPage(event) {
  // Энэ нь дугтуйг дахин дарахаас (click bubbling) сэргийлнэ
  event.stopPropagation(); 

  pages[currentPage].classList.remove("active");
  currentPage++;

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
    if (currentPage === pages.length - 1) {
      nextBtn.innerText = "Done";
    }
  } else {
    window.location.href = "music.html";
  }
}
