'use strict';

const smallImage = document.querySelectorAll(".small-pro");
// const oneSmallImage = document.querySelector(".small-pro");
const currentImage = document.querySelector(".main-pro");
const currentIM = document.querySelectorAll(".main-pro");
const quantity = document.querySelector(".quantity-increase");
const minus = document.querySelector(".red-minus");
const add = document.querySelector(".red-add");
const toCart = document.getElementById("add");
const cartNo = document.querySelector(".cart-no");
const exitPage = document.querySelector(".exit");
const page2 = document.querySelector(".content-2");
const overlay = document.querySelector(".overlay");
const cartImage = document.querySelector(".cart-img");
const cartContent = document.querySelector(".drop");
const summary = document.querySelector(".price-summary");
const empty = document.querySelector(".empty-cart");
const message = document.querySelector(".empty-message");
const productMessage = document.querySelector(".drop-section");
const checkout = document.querySelector(".checkout-button");
const bin = document.querySelector(".bin");
const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".nex");

console.log(quantity.textContent)
/*------ add/minus button------*/


// const no = 1
add.addEventListener("click", () => {
    quantity.textContent++
})

minus.addEventListener("click", () => {
    // quantity.textContent--
    if (quantity.textContent === "0") {
        quantity.textContent = "0";
    } else {
        quantity.textContent--;
    }
})

/*---------Button----------*/
let a = 1;
nextButton.addEventListener("click", () => {
    if (a < currentIM.length) {
        currentImage.setAttribute("src", `images/image-product-${a + 1}.jpg`);
        a++;
    }
    else {
        a = 0;
    }

})

let b = 0;
previousButton.addEventListener("click", () => {
    if (b < currentIM.length) {
        currentImage.setAttribute("src", `images/image-product-${currentIM.length - b}.jpg`);
        b++;
    }
    else {
        b = 1;
    }
    console.log(b)
})


/*---------BUTTON------*/

toCart.addEventListener("click", () => {
    cartNo.textContent = quantity.textContent;
    cartNo.classList.remove("hidden");

    summary.textContent = `$125.00 x ${quantity.textContent} $ ${125.00 * quantity.textContent}.00`;
})

cartImage.addEventListener("click", () => {
    // cartContent.classList.toggle("hidden");
    if (cartNo.textContent === "0") {
        cartNo.classList.add("hidden");
        cartContent.classList.toggle("hidden");
        // console.log("lol")
        productMessage.classList.add("hidden");
        message.classList.remove("hidden");
        checkout.classList.add("hidden")

    } else {
        cartNo.classList.remove("hidden")
        cartContent.classList.toggle("hidden");
        productMessage.classList.remove("hidden");
        message.classList.add("hidden");
        checkout.classList.remove("hidden")
    }

})

bin.addEventListener("click", () => {
    cartNo.classList.add("hidden");
    productMessage.classList.add("hidden");
    message.classList.remove("hidden");
    checkout.classList.add("hidden");
    cartNo.textContent = 0;
    quantity.textContent = 0;
})



exitPage.addEventListener("click", () => {
    page2.classList.add("hidden");
    overlay.classList.add("hidden")
})

currentImage.addEventListener("click", () => {
    page2.classList.remove("hidden")
    overlay.classList.remove("hidden")
})



/*-----shoe slide -----*/

// smallImage.addEventListener("click", ()=> {
// smallImage[i].classList.add
// })

const sma = document.querySelectorAll(".sm");
const man = document.querySelector(".ma")
console.log(smallImage.length)
for (let i = 0; i < smallImage.length; i++) {
    smallImage[i].addEventListener("click", function () {
        // smallImage[i].classList.toggle("smallClick");
        currentImage.setAttribute("src", `images/image-product-${i + 1}.jpg`);
        // smallImage[i].classList.toggle("smallClick")
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

    })
}

for (let i = 0; i < sma.length; i++) {
    sma[i].addEventListener("click", function () {
        // currentImage.setAttribute("src", `images/image-product-1.jpg`);
        man.setAttribute("src", `images/image-product-${i + 1}.jpg`);

        let current1 = document.getElementsByClassName("act");
        current1[0].className = current1[0].className.replace(" act", "");
        this.className += " act";

    })
}


