

// Projects on the page
var allProjects = document.querySelectorAll(".project");
var webDevProjects = document.querySelectorAll(".web-dev-project");
var iosProjects = document.querySelectorAll(".ios-project");
var entiProjects = document.querySelectorAll(".enti-project");
var uiDesignProjects = document.querySelectorAll(".ui-design-project");
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


// Buttons
var currentDisplayProjects = allProjects;
var allButton = document.querySelector("#all-btn");
var iosButtons = document.querySelectorAll(".iOS-btn");
var webDevButtons = document.querySelectorAll(".web-development-btn");
var entiButtons = document.querySelectorAll(".enti-btn");
var uiDesignButtons = document.querySelectorAll(".ui-design-btn");




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

for (var i = 0; i < entiButtons.length; i++) {
  entiButtons[i].addEventListener("click", function() {
    updateDisplayProjects(entiProjects);
  });
}

for (var i = 0; i < uiDesignButtons.length; i++) {
  uiDesignButtons[i].addEventListener("click", function() {
    updateDisplayProjects(uiDesignProjects);
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
