//
// Created by Zachariah Albers on 7/14/18.
// Copyright © 2018 Zachariah Albers. All rights reserved.
//


// Projects on the page





// var projectTags = ["all", "ios", "web-dev", "enti" "ui-design", "java", "python", "backend"];

var projectTags = ["all", "ios", "web-dev", "enti", "ui-design", "java", "python", "backend", "arduino", "cpsc-581"];

var projectTagDic = {}

for (var i = 0; i <projectTags.length; i++) {

  projectTagDic[projectTags[i]] = document.querySelectorAll("." + projectTags[i]  +"-project");
}



var allProjects = document.querySelectorAll(".all-project");
var currentDisplayProjects = allProjects;

var parentTag = document.querySelector(".parentTag");

var currentTag = document.querySelector("#all-btn")

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



function updateDisplayTags(tagName) {
  currentTag.classList.add('btn-outline-primary');
  currentTag.classList.remove('active');
  currentTag.classList.remove('btn-primary');

  currentTag = document.querySelector(tagName);
  currentTag.classList.remove('btn-outline-primary');
  currentTag.classList.add('active');
  currentTag.classList.add('btn-primary');
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

for (var i = 0; i <projectTags.length; i++) {
  var curString = String(projectTags[i]);

  var curButtons = document.querySelectorAll("." + curString+"-btn");


  for (var x = 0; x <curButtons.length; x++) {

    curButtons[x].addEventListener("click", function() {
      updateDisplayProjects(projectTagDic[this.name]);
      updateDisplayTags("#" + this.name +"-btn");
    });
  }

}
