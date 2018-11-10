

// Projects on the page
var allProjects = document.querySelectorAll(".projectZ");
var webDevProjects = document.querySelectorAll(".web-dev-project");
var iosProjects = document.querySelectorAll(".ios-project");
var parentTag = document.querySelector(".parentTag");

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



var currentDisplayProjects = allProjects;
var allButton = document.querySelector("#all-btn");
var iosButtons = document.querySelectorAll(".iOS-btn");
var webDevButtons = document.querySelectorAll(".web-development-btn");




allButton.addEventListener("click", function() {


  updateDisplayProjects(allProjects);

});




for (var i = 0; i <iosButtons.length; i++) {
  iosButtons[i].addEventListener("click", function() {
    updateDisplayProjects(iosProjects);
  });
}

for (var i = 0; i < webDevButtons.length; i++) {
  webDevButtons[i].addEventListener("click", function() {
    updateDisplayProjects(webDevProjects);
  });
}





function updateDisplayProjects(projectsToShow) {
  for (var i = 0; i <currentDisplayProjects.length; i++) {
    parentTag.removeChild(currentDisplayProjects[i]);
  }

  currentDisplayProjects = projectsToShow
  for (var i = 0; i <currentDisplayProjects.length; i++) {
    parentTag.appendChild(currentDisplayProjects[i]);
  }
}






// hardButton.addEventListener("click", function() {
//   messageDisplay.textContent = "";
//   numberofSquares = 6;
//   hardButton.classList.add("selected");
//   easyButton.classList.remove("selected");
//   colors = generateRandomColors(numberofSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
//
//
// });
//
// easyButton.addEventListener("click", function() {
//   messageDisplay.textContent = "";
//   numberofSquares = 3;
//   easyButton.classList.add("selected");
//   hardButton.classList.remove("selected");
//   colors = generateRandomColors(numberofSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
//
// });
//
// resetButton.addEventListener("click", function() {
//   colors = generateRandomColors(numberofSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//
//   for(var i = 0; i < squares.length; i++) {
//     // add intial colors to squares
//     squares[i].style.backgroundColor = colors[i]
//   }
//   h1.style.backgroundColor = "steelblue";
//   resetButton.textContent = "New Colors";
//   messageDisplay.textContent = "";
//
// });
//
//
// colorDisplay.textContent = pickedColor;
//
// for(var i = 0; i < squares.length; i++) {
//   // add intial colors to squares
//   squares[i].style.backgroundColor = colors[i]
//
//   // add click listeners to squares
//   squares[i].addEventListener("click", function() {
//     // grab color of clicked square
//     var clickedColor = this.style.backgroundColor;
//
//     if (clickedColor === pickedColor) {
//
//       changeColor(pickedColor);
//       h1.style.backgroundColor = pickedColor;
//       messageDisplay.classList.remove("incorrect")
//       messageDisplay.classList.add("correct");
//       messageDisplay.textContent = "Correct";
//
//       resetButton.textContent = "Play Again?";
//     } else {
//       this.style.backgroundColor = "#232323";
//       messageDisplay.classList.add("incorrect")
//       messageDisplay.classList.remove("correct");
//       messageDisplay.textContent = "Try Again";
//     }
//   });
//
// }
//
// function changeColor(color) {
//
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = color;
//   }
// }
//
//
//
//
// function pickColor() {
//   return colors[Math.floor(Math.random() * colors.length)];
// }
//
// function generateRandomColors(num) {
//   var arr = []
//
//   for (var i = 0; i < num; i++) {
//     arr.push(randomColor());
//   }
//
//   return arr
// }
//
// function randomColor(){
//   r = Math.floor(Math.random() * 256);
//   g = Math.floor(Math.random() * 256);
//   b = Math.floor(Math.random() * 256);
//
//   return "rgb(" + r + ", " + g + ", " + b + ")";
//
// }
//
//
//
//
















//
