// 3 секундийн дараа popup гарна
setTimeout(() => {
  const popup = document.getElementById("letterPopup");
  if (popup) popup.classList.remove("hidden");
}, 3000); // 4000-ыг 3000 болгосон

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
  event.stopPropagation(); 

  // Хэрэв дараагийн хуудас байгаа бол
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");

    // Хэрэв одоо хамгийн сүүлийн хуудас бол
    if (currentPage === pages.length - 1) {
      nextBtn.innerText = "Done";
    }
  } else {
    // Хамгийн сүүлийн хуудас дээр "Done" дарахад шилжинэ
    window.location.href = "music.html";
  }
}
