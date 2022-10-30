let hamburger = document.getElementById("hamburger");
let mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
    if(mobileMenu.style.display == "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
});

window.addEventListener("resize", () => {
    mobileMenu.style.display = "none";
})

