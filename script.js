// STEP 1 → 2
setTimeout(() => {
  document.getElementById("cardScreen").style.display = "none";
  document.getElementById("boxScreen").classList.remove("hidden");
}, 4000);

function openLetter() {
  document.getElementById("letterPopup").classList.remove("hidden");
  document.querySelector(".envelope").classList.add("open");
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

