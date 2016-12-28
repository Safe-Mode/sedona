"use strict";

var button = document.querySelector(".btn-hotels-search"),
    form = document.querySelector("form"),
    dateOn = form.querySelector("[name=date-on]"),
    dateOff = form.querySelector("[name=date-off]"),
    formStyle = getComputedStyle(form);

button.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("index-search-hotels-show");

    var delay = (function() {
        var value = formStyle.animationDuration,
            numValue = +value.slice(0, value.length - 1);

        return numValue * 1000;
    })();

    if (form.classList.contains("index-search-hotels-show")) {
        setTimeout(function() {
            dateOn.focus();
        }, delay);
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
