"use strict";

var button = document.querySelector(".btn-hotels-search"),
    popup = document.querySelector(".index-search-hotels");

button.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("index-search-hotels-show");
});
