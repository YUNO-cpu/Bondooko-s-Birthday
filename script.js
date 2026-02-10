// 4 секунд дараа box гарч ирнэ
setTimeout(() => {
  document.getElementById("cardScreen").style.display = "none";
  document.getElementById("boxScreen").classList.remove("hidden");
}, 4000);

function openLetter() {
  document.getElementById("letterPopup").classList.remove("hidden");
}

let currentPage = 0;
const pages = document.querySelectorAll(".letter-page");

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  } else {
    // дууссан → шинэ page
    window.location.href = "music.html";
  }
}

