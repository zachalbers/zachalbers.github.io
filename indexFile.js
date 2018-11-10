var allCards = document.querySelectorAll(".card");



for (var i = 0; i <allCards.length; i++) {
  allCards[i].addEventListener("mouseover", function() {
    this.classList.add('shadow-lg');
    this.classList.remove('shadow-sm');
  });

allCards[i].addEventListener("mouseleave", function() {
  this.classList.remove('shadow-lg');
  this.classList.add('shadow-sm');
});





}
