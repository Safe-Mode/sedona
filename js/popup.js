"use strict";

var button = document.querySelector(".btn-hotels-search"),
    form = document.querySelector("form"),
    dateOn = form.querySelector("[name=date-on]"),
    dateOff = form.querySelector("[name=date-off]");

button.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("index-search-hotels-show");
    dateOn.focus();

    if (form.classList.contains("modal-error")) {
        form.classList.remove("modal-error");
    }
});

form.addEventListener("submit", function(event) {
    if (!dateOn.value || !dateOff.value) {
        event.preventDefault();
        form.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27 && form.classList.contains("index-search-hotels-show")) {
        form.classList.remove("index-search-hotels-show");

        if (form.classList.contains("modal-error")) {
            form.classList.remove("modal-error");
        }
    }
});
