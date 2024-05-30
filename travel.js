let searchbtn = document.querySelector("#search-btn");
let searchform = document.querySelector(".search-form");
let loginbtn = document.querySelector(".login-form");
let menuBar = document.querySelector("#menu-bar");
let amenu = document.querySelector(".navbar");
let vidoBtn=document.querySelectorAll(".video-btn");
let videoSlider = document.querySelector('#video-slider');
function showbar(){
   searchform.classList.toggle("active");
   searchbtn.classList.toggle("fa-times");
}

function showform(){
    loginbtn.classList.add("active");
}

function hideform(){
    loginbtn.classList.remove("active");
}

function showmenu(){
    menuBar.classList.toggle("fa-times");
    amenu.classList.toggle("active");
}
vidoBtn.forEach(slide => {
    slide.addEventListener("click", function() {
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");


        let src = slide.getAttribute('data-src');
        videoSlider.src = src;
    });
});
var swiper = new Swiper(".review-slider", {

spaceBetween :20,
loop:true,
autoplay:{

    delay:1000,

}

});
