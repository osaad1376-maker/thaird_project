

let offers = document.querySelector(".offers-items");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let r = document.getElementsByClassName("offer-item")
let index = 0;

function slide(to) {
    let total = offers.children.length;;
    index = (index + to + total) % total;
    offers.style.transform = `translateX(-${index * 100}%)`;
}

next.onclick = () => slide(1);
prev.onclick = () => slide(-1);







let BtnClose = document.getElementById("close");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let BoxContainer = document.getElementById("box-image");
let boxItem = document.getElementById("box-control");
let images = document.querySelectorAll(".image img");

let imagesArr = [];
for (let i = 0; i < images.length; i++) {
    imagesArr.push(images[i]);
}
let currentIndex = 0;

function showImage(index) {
    boxItem.style.backgroundImage = "url(" + imagesArr[index].src + ")";
}


for (let j = 0; j < imagesArr.length; j++) {
    (function (j) {
        imagesArr[j].addEventListener("click", function () {
            BoxContainer.style.display = "flex";
            currentIndex = j;
            showImage(currentIndex);
        });
    })(j);
}

BtnClose.addEventListener("click", function () {
    BoxContainer.style.display = "none";
});

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex === imagesArr.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagesArr.length - 1;
    }
    showImage(currentIndex);
});

BoxContainer.addEventListener("click", function (event) {
    if (event.target === BoxContainer) {
        BoxContainer.style.display = "none";
    }
});

















function form1() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let sub = document.getElementById("sub").value;
    let masg = document.getElementById("masg").value;

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Enter a valid email");
        return false;
    }


    if (name === "" || sub === "" || masg === "") {
        alert("Fill all fields");
        return false;
    }


    return true;
}


function form2() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let sub = document.getElementById("sub").value;
    let masg = document.getElementById("masg").value;

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Enter a valid email");
        return false;
    }


    if (name === "" || sub === "" || masg === "") {
        alert("Fill all fields");
        return false;
    }


    return true;
    }