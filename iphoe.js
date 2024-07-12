let img = document.querySelector(".image");
console.log(img)

function phones(phone) {
    img.src = phone;
};

let contain = document.querySelector(".container");

function background (color) {
    contain.style.background = color;
};
