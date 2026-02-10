let currentPage = 0;
const pages = document.querySelectorAll(".letter-page");

function openLetter() {
  document.getElementById("letter").classList.add("open");
}

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  } else {
    currentPage = pages.length - 1;
  }
}

