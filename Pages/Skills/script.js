document.addEventListener("DOMContentLoaded", function () {
  var resumeBtn = document.getElementById("resumeBtn");

  resumeBtn.addEventListener("click", function () {
    window.open("../../Assets/Aditya_Garg.pdf", "_blank");
  });
});

var lang = document.querySelector(".select .lang");
var front = document.querySelector(".select .front");
var back = document.querySelector(".select .back");
var aiml = document.querySelector(".select .aiml");

var langList = document.querySelector(".tech .list .lang");
var frontList = document.querySelector(".tech .list .front");
var backList = document.querySelector(".tech .list .back");
var aimlList = document.querySelector(".tech .list .aiml");

lang.addEventListener("click", function () {
  langList.style.display = "flex";
  frontList.style.display = "none";
  backList.style.display = "none";
  aimlList.style.display = "none";
  lang.style.borderBottom = "solid 1px white"
  front.style.borderBottom = "none"
  back.style.borderBottom = "none"
  aiml.style.borderBottom = "none"
});

front.addEventListener("click", function () {
  langList.style.display = "none";
  frontList.style.display = "flex";
  backList.style.display = "none";
  aimlList.style.display = "none";
  lang.style.borderBottom = "none"
  front.style.borderBottom = "solid 1px white"
  back.style.borderBottom = "none"
  aiml.style.borderBottom = "none"
});

back.addEventListener("click", function () {
  langList.style.display = "none";
  frontList.style.display = "none";
  backList.style.display = "flex";
  aimlList.style.display = "none";
  lang.style.borderBottom = "none"
  front.style.borderBottom = "none"
  back.style.borderBottom = "solid 1px white"
  aiml.style.borderBottom = "none"
});

aiml.addEventListener("click", function () {
  langList.style.display = "none";
  frontList.style.display = "none";
  backList.style.display = "none";
  aimlList.style.display = "flex";
  lang.style.borderBottom = "none"
  front.style.borderBottom = "none"
  back.style.borderBottom = "none"
  aiml.style.borderBottom = "solid 1px white"
});
