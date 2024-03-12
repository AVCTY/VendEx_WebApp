/* 
File name: enhancements.js
Author: Clement Goh
Last modified: 31/10/19
Description: Assignment 2 js
*/

//display message whether form is sent or not
function validate() {
    alert("Booking Successfully");
}

//display summary on confirm.html
function getEnquiry() {
    //if name is not empty
    if (sessionStorage.firstname != undefined) {
        //display confirmation text
        document.getElementById("confirm_fname").textContent = sessionStorage.firstname;
        document.getElementById("confirm_lname").textContent = sessionStorage.lastname;
        document.getElementById("confirm_email").textContent = sessionStorage.email;
        document.getElementById("confirm_tel").textContent = sessionStorage.tel;
        document.getElementById("confirm_street").textContent = sessionStorage.street;
        document.getElementById("confirm_city").textContent = sessionStorage.city;
        document.getElementById("confirm_state").textContent = sessionStorage.state;
        document.getElementById("confirm_postcode").textContent = sessionStorage.postcode;
        document.getElementById("confirm_product").textContent = sessionStorage.product;
        document.getElementById("confirm_duration").textContent = sessionStorage.duration;
        document.getElementById("confirm_comment").textContent = sessionStorage.comment;
    }
}

//redirect back to enquiry.html if cancel 
function cancelEnquiry() {
    window.location = "enquiry.html";
}

//Adding and removing "responsive" class to topnav when user click on icon
//This code is inspired from https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp
function mobileMenu() {
    var x = document.getElementById("Nav");
    if (x.className === "mobilenav") {
        x.className += " responsive";
    } else {
        x.className = "mobilenav";
    }
}

function backtoTop() {
    //Back to top button
    BtnTop = document.getElementById("topBtn");

    window.onscroll = function() { scrollfunction() };

    //Function for when user scrolls past 30 pixels from the top of the webpage to show the button.
    function scrollfunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            BtnTop.style.display = "block";
        } else {
            BtnTop.style.display = "none";
        }
    }

    //Function for when the user clicks the button to scroll back to the top of the page
    function topfunction() {
        document.body.scrollTop = 0; //Used in safari
        document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera browsers
    }

    topfunction()
    scrollfunction()
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*Loading effect*/
function loading() {
    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);

    function frame() {
        if (loading == 100) {
            clearInterval(id);
            preload.style.display = 'none';

        } else {
            loading = loading + 1;
            if (loading == 90) {
                preload.style.animation = "fadeout 1s ease";
            }
        }
    }
}