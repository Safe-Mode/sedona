"use strict";

var button = document.querySelector(".btn-hotels-search"),
    form = document.querySelector("form"),
    dateOn = form.querySelector("[name=date-on]"),
    dateOff = form.querySelector("[name=date-off]");

button.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("index-search-hotels-show");
    dateOn.focus();
});

form.addEventListener("submit", function(event) {
    if (!dateOn.value || !dateOff.value) {
        event.preventDefault();
        console.log('Введи');
    }
});
