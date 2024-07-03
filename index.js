const loadSlides = () => {
  let quantie_slides = 15;
  let divSlides = document.getElementById("swiper-wrapper");

  for (let i = 0; i < quantie_slides; i++) {
    let image_actually = i + 1;

    divSlides.innerHTML += `
                    <div class="swiper-slide" style="background-image: url(imgs/imgs-slides/${image_actually}.png); background-size: cover;">Slide 1</div>

        `;
  }
};

loadSlides();
