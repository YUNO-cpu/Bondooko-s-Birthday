const gift = document.getElementById("gift");
const letter = document.getElementById("letter");
const pages = document.querySelectorAll(".page");
let currentPage = 0;

// 4 секундийн дараа зураг гарч ирнэ
setTimeout(() => {
  gift.classList.add("show");
}, 4000);

// Зураг дээр дарахад захиа гарна
function openLetter() {
  letter.style.display = "block";
  gift.style.display = "none";
}

// Next button
function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  }
}
