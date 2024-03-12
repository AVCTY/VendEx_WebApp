/* 
File name: script.js
Author: Clement Goh
Last modified: 31/10/19
Description: Assignment 2 js
*/

//Validating first name input

function validate_fname() {
    var fname = document.getElementById("fname").value;
    document.getElementById("fname").maxLength = 25;

    if (/^[A-Za-z]+$/.test(fname) == false) {
        return true;
    } else {
        return false;
    }
}

//Validating last name input

function validate_lname() {
    var lname = document.getElementById("lname").value;
    document.getElementById("fname").maxLength = 25;

    if (/^[A-Za-z]+$/.test(lname) == false) {
        return true;
    } else {
        return false;
    }
}

//Validating email input

function validate_email() {
    var email = document.getElementById("email").value;

    if (/^.+@.+\..{2,3}$/.test(email) == false) {
        return true;
    } else {
        return false;
    }
}

//Validating contact number input

function validate_tel() {
    var tel = document.getElementById("tel").value;
    document.getElementById("fname").maxLength = 11;

    if (/^(01)[0-46-9]*[0-9]{7,8}$/.test(tel) == false) {
        return true;
    } else {
        return false;
    }
}

//Validating subject input

function validate_subject() {
    var subject = document.getElementById("subject").value;

    if (subject == "") {
        return true;
    } else {
        return false;
    }
}

//Validating street input

function validate_streetAddress() {
    var street = document.getElementById("street").value;
    document.getElementById("street").maxLength = 40;

    if (street == "") {
        return true;
    } else {
        return false;
    }
}

//Validating city input

function validate_city() {
    var city = document.getElementById("city").value;
    document.getElementById("city").maxLength = 20;

    if (city == "") {
        return true;
    } else {
        return false;
    }
}

//Validating state input

function validate_state() {
    var state = document.getElementById("state").selectedIndex;

    if (state < 0) {
        return true;
    } else {
        return false;
    }
}

//Validating postcode input 

function validate_postcode() {
    var postcode = document.getElementById("postcode").value;

    if (/^[0-9]{5}$/.test(postcode) == false) {
        return true;
    } else {
        return false;
    }
}

//Validating product input 

function validate_product() {
    var product = document.getElementById("product").selectedIndex;

    if (product < 0) {
        return true;
    } else {
        return false;
    }
}

//Validating rental duration input 

function validate_duration() {
    var duration = document.getElementById("duration").value;

    if (/^[0-9]+$/.test(duration) == false) {
        return true;
    } else {
        return false;
    }
}

//Fill the subject field with the value of product

function storeSub() {
    document.getElementById("product").selectedIndex = sessionStorage.productIndex;

    var product = document.getElementById("product").value;

    sessionStorage.subject = product;
    document.getElementById("subject").value = sessionStorage.subject;
}

//Display error message and taking input values and store into session storage using storeEnq function
function validateForm() {
    var errMsg = "";
    var result = true;

    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var postcode = document.getElementById("postcode").value;
    var product = document.getElementById("product").value;
    var duration = document.getElementById("duration").value;
    var comment = document.getElementById("comment").value;


    if (validate_fname()) {
        errMsg += "Fill in your first name. e.g. John\n";
    }
    if (validate_lname()) {
        errMsg += "\nFill in your last name. e.g. Wilson\n";
    }
    if (validate_email()) {
        errMsg += "\nEnter a valid email address. e.g. johnwilson@swinburne.edu.com\n";
    }
    if (validate_tel()) {
        errMsg += "\nEnter a valid contact number. e.g. 0112345678\n";
    }
    if (validate_subject()) {
        errMsg += "\nEnter a subject.\n";
    }
    if (validate_streetAddress()) {
        errMsg += "\nEnter a valid street address. 123, Lrg 1A ...\n";
    }
    if (validate_city()) {
        errMsg += "\nEnter a valid city. e.g. Kuching\n";
    }
    if (validate_state()) {
        errMsg += "\nSelect yout state. e.g. Sarawak\n";
    }
    if (validate_postcode()) {
        errMsg += "\nEnter a valid postcode. e.g. 93000\n";
    }
    if (validate_product()) {
        errMsg += "\nSelect a product that you wish to enquire. e.g. Vex45 Media Touch\n";
    }
    if (validate_duration()) {
        errMsg += "\nEnter a valid rental duration. e.g. 10\n";
    }
    if (errMsg != "") {
        window.alert(errMsg);
        result = false;
    }

    sessionStorage.firstname = firstname;
    sessionStorage.lastname = lastname;
    sessionStorage.email = email;
    sessionStorage.tel = tel;
    sessionStorage.street = street;
    sessionStorage.city = city;
    sessionStorage.state = state;
    sessionStorage.postcode = postcode;
    sessionStorage.product = product;
    sessionStorage.duration = duration;
    sessionStorage.comment = comment;


    return result;
}

//Store individual product page into sessionStorage
function storeProduct(productName) {
    var options = ["Vex45 Media Touch", "Vex69 Media Touch", "Gatorade Cold Drinks", "Coke Cold Drinks", "Pepsi Cold Drinks", "Xeno700 Cold Drinks", "Wittenborg 9100 Hot Drinks", "Coffetek Vitro Espresso", "Flavia Creation 400", "Keurig Brewing Systems", "Coffee Stations", "Snax45 Media Touch", "Snax69 Media Touch", "VenMaster Snacks", "VenMaster 2 Snacks", "Venfinity Snacks", "Snac420 Snacks"];

    options.forEach(array);

    function array(value) {
        if (value == productName) {
            sessionStorage.productIndex = options.indexOf(value);
        }
    }
}

//Storing state list into an array

function statelist() {
    var select = document.getElementById("state");

    var options = ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Putrajaya", "Sabah", "Sarawak", "Selangor", "Terengganu"];

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//Storing first optgroup into array

function productlist1() {
    var select = document.getElementById("product");

    var options = ["Vex45 Media Touch", "Vex69 Media Touch", "Gatorade Cold Drinks", "Coke Cold Drinks", "Pepsi Cold Drinks", "Xeno700 Cold Drinks"];

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//Storing second optgroup into array

function productlist2() {
    var select = document.getElementById("product");

    var options = ["Wittenborg 9100 Hot Drinks", "Coffetek Vitro Espresso", "Flavia Creation 400", "Keurig Brewing Systems", "Coffee Stations"];

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//Storing third optgroup into array

function productlist3() {
    var select = document.getElementById("product");

    var options = ["Snax45 Media Touch", "Snax69 Media Touch", "VenMaster Snacks", "VenMaster 2 Snacks", "Venfinity Snacks", "Snac420 Snacks"];

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

function change() {
    var product = document.getElementById("product").value;
    sessionStorage.product = product;
    document.getElementById("subject").value = sessionStorage.product;
}