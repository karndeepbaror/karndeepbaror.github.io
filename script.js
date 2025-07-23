
const text = "Your Story, Perfectly Edited!";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;
