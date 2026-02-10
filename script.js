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

// Захианы хуудас солих логик
let currentPage = 0;
const pages = document.querySelectorAll(".letter-page");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

function updateButtons() {
  // Эхний хуудас бол Back-ыг нууна
  if (backBtn) {
    backBtn.style.display = (currentPage === 0) ? "none" : "inline-block";
  }
  
  // Сүүлийн хуудас бол Next-ийг Done болгоно
  if (nextBtn) {
    nextBtn.innerText = (currentPage === pages.length - 1) ? "Done" : "Next";
  }
}

function nextPage(event) {
  event.stopPropagation(); // Дугтуйг дахин дарагдахаас сэргийлнэ
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
    updateButtons();
  } else {
    // Бүх хуудас дуусахад шилжих
    window.location.href = "music.html";
  }
}

function prevPage(event) {
  event.stopPropagation();
  if (currentPage > 0) {
    pages[currentPage].classList.remove("active");
    currentPage--;
    pages[currentPage].classList.add("active");
    updateButtons();
  }
}

// Анх ачааллахад товчлуурын төлвийг шалгах
updateButtons();
