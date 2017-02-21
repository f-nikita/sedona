var popup = document.querySelector(".modal-content"); 
var form = popup.querySelector(".form"); 
var openClose = document.querySelector(".open-form");
var searchButton = popup.querySelector(".search"); 
var arrivalDate = popup.querySelector("[name= arrival-date]");
var leavingDate = popup.querySelector("[name= leaving-date]");
var adult = popup.querySelector("[name= adult]");
var children = popup.querySelector("[name= children]");


openClose.addEventListener("click", function(event) { 
event.preventDefault(); 
popup.classList.toggle("modal-content-show"); 
}); 

searchButton.addEventListener("click", function(event) { 
if (!(arrivalDate.value && leavingDate.value && adult.value && children.value)) { 
event.preventDefault();
popup.classList.add("modal-error"); 
}
}); 

window.addEventListener("keydown", function(event) { 
if (event.keyCode == 27) { 
if (popup.classList.contains("modal-content-show")) { 
popup.classList.remove("modal-content-show"); 
} 
} 
});