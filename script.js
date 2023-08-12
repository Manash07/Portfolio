const text = `Hey, I am Manash Ghimire and I am a Front End Web Developer. `;
const typingSpeed = 100;

const textElement = document.getElementById("typing-text");

let charIndex = 0;

function typenextChar() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typenextChar, typingSpeed);
  } else {
    charIndex = 0;
    textElement.textContent = "";
    setTimeout(typenextChar, typingSpeed);
  }
}

typenextChar();
