// STEP 1 → 2
setTimeout(() => {
  document.getElementById("cardScreen").style.display = "none";
  document.getElementById("boxScreen").classList.remove("hidden");
}, 4000);

function openLetter() {
  const popup = document.getElementById("letterPopup");
  const envelope = document.querySelector(".envelope");

  popup.classList.remove("hidden"); // popup гарна (envelope харагдана)

  setTimeout(() => {
    envelope.classList.add("open"); // дараа нь захиа гарна
  }, 300);
}

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

