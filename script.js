// 4 секундийн дараа popup гарна
setTimeout(() => {
  const popup = document.getElementById("letterPopup");
  popup.classList.remove("hidden");
}, 4000);

// envelope дээр дарахад захиа гарна
function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");
}

// page солих логик (энэхэвээрээ)
let currentPage = 0;
const pages = document.querySelectorAll(".letter-page");
const nextBtn = document.getElementById("nextBtn");

function nextPage() {
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
