/**!Değişken tanımlıyoruz arrow clasına ulaşmak için */
const arrows = document.querySelectorAll(".arrow");
/****movieList e ulaşacağız class olarak kafana göre değişken ver*/
const movieLists = document.querySelectorAll(".movie-list");

/**foreach dönüyoruz ve bu kodla arrowlara tıklayabileceğiz* */
arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300)
    console.log(Math.floor(window.innerWidth / 300));
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      clickCounter++;
      /****movielist'in indeksine bir style tanımlıyoruz */
      /****style transform tanımlıyoruz ve = "translateX yani yatayda kaymasını isteyeceğiz" */
      /****translateX(-300) */
      movieLists[i].style.transform = `translateX/${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  
});


/* DARK MODE */
const ball = document.querySelector("toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter-select");
ball.addEventListener("click", function (){
    items.forEach((item) =>item.classList.toggle("active"));
})