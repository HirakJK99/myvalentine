document.addEventListener("DOMContentLoaded", function () {

  let started = false;
  const box = document.getElementById("finalBox");

  if (!box) return; // safety check

  box.addEventListener("click", function () {
    if (started) return;
    started = true;

    const gifs = document.querySelectorAll(".gif-item");
    const finalLine = document.querySelector(".final-line");

    gifs.forEach((gif, index) => {
      setTimeout(() => {
        gif.classList.add("show");
      }, index * 1500);
    });

    setTimeout(() => {
      finalLine.classList.add("show");
    }, gifs.length * 1500 + 800);
  });

});
pages.forEach((p, i) => {
  if (i !== 0) p.classList.remove('active');
});
pages[0].classList.add('active');
current = 0;