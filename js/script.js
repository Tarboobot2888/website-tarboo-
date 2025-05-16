// ====== Typewriter Effect V2: مختصر وجذاب ======
const textElement = document.getElementById('typewriter-text');

const lines = [
  "نحن لا نكتب الأكواد،",
  "نحن نُلقّنها كيف تُنفّذ ✓",
  "",
  "نسحر الـ HTML،",
  "ونجلِد الـ Bugs بلا رحمة.",
  "",
  'console.log("مرحبًا بك في عالمي");'
];

let lineIndex = 0;
let charIndex = 0;
let output = '';

function typeLine() {
  if (lineIndex < lines.length) {
    const current = lines[lineIndex];
    if (charIndex < current.length) {
      output += current.charAt(charIndex);
      textElement.innerHTML = `<span style="color: ${getColor(lineIndex)};">${output}</span>`;
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      output += "<br>";
      textElement.innerHTML = `<span style="color: ${getColor(lineIndex)};">${output}</span>`;
      charIndex = 0;
      lineIndex++;
      setTimeout(typeLine, 500);
    }
  }
}

function getColor(index) {
  const colors = ['#00ffcc', '#d0ff00', '#ff00ff', '#00ff99', '#ffcc00'];
  return colors[index % colors.length];
}

document.addEventListener('DOMContentLoaded', () => {
  typeLine();
  revealOnScroll();
});

// ====== Scroll Reveal Effect ======
function revealOnScroll() {
  const revealElements = document.querySelectorAll('.section');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check
}