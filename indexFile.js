  //
  // Created by Zachariah Albers on 7/14/18.
  // Copyright © 2018 Zachariah Albers. All rights reserved.
  //


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





// Get the modal


// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll(".hoverImage");
var modal = document.querySelector(".hoverModal");


var modalImg = document.querySelector(".hoverModal-content");
var captionText = document.querySelectorAll(".hoverModal-caption");
var spans = document.querySelectorAll(".HoverImageclose");



// console.log(modals.length)
// console.log(modalImgs.length)


for (var i = 0; i <imgs.length; i++) {


  imgs[i].onclick = function(){

    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  spans[i].onclick = function() {
    modal.style.display = "none";
  }
}

// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal
