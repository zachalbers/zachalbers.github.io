//
// Created by Zachariah Albers on 7/14/18.
// Copyright © 2018 Zachariah Albers. All rights reserved.
//

var projectsButton = document.querySelector("#projects-Button");
var homeButton = document.querySelector("#home-Button");
var contactButton = document.querySelector("#contact-Button");
var cpsc581Button = document.querySelector("#cpsc581-Button");
var currentXCoord = 0;

// 
// window.onload = function() {
//   currentXCoord = parseInt(window.location.hash.substring(1)) || 0;
//
//   window.scroll(0,200);
//
// }

window.addEventListener('load', function () {
  currentXCoord = parseInt(window.location.hash.substring(1)) || 0;

  window.scroll(0,currentXCoord);
}, false);





projectsButton.addEventListener("click", function() {

  currentXCoord = document.documentElement.scrollTop || document.body.scrollTop;
  window.location.href = './projects.html' + '#' + currentXCoord.toString();


});

homeButton.addEventListener("click", function() {

  currentXCoord = document.documentElement.scrollTop || document.body.scrollTop;
  window.location.href = './index.html' + '#' + currentXCoord.toString();


});

contactButton.addEventListener("click", function() {

  currentXCoord = document.documentElement.scrollTop || document.body.scrollTop;
  window.location.href = './contact.html' + '#' + currentXCoord.toString();


});

cpsc581Button.addEventListener("click", function() {

  currentXCoord = document.documentElement.scrollTop || document.body.scrollTop;
  window.location.href = './CPSC581.html' + '#' + currentXCoord.toString();


});
