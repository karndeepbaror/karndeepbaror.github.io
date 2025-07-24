window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";

  const reveals = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", () => {
    for (let el of reveals) {
      let windowHeight = window.innerHeight;
      let elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    }
  });
});

const icons = {
  icon1: "https://assets7.lottiefiles.com/packages/lf20_0yfsb3a1.json",
  icon2: "https://assets6.lottiefiles.com/private_files/lf30_gusvdtul.json",
  icon3: "https://assets6.lottiefiles.com/packages/lf20_fjwpgnwz.json",
  icon4: "https://assets10.lottiefiles.com/packages/lf20_rnnlxazi.json",
  icon5: "https://assets3.lottiefiles.com/packages/lf20_tazpxf.json",
  skillsAnimation: "https://assets1.lottiefiles.com/packages/lf20_u4yrau.json"
};

for (const [id, url] of Object.entries(icons)) {
  const container = document.getElementById(id);
  if (container) {
    lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: url
    });
  }
}
