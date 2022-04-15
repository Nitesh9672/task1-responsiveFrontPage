const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        header.style.backgroundColor = '#ffff';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


function show() {
    document.getElementById("upload-box").style.display = "flex";
    document.getElementsByTagName("body")[0].classList.add('my-body-noscroll-class')
}

function hide() {
    document.getElementById("upload-box").style.display = "none";
    document.getElementsByTagName("body")[0].classList.remove('my-body-noscroll-class')
}
// var uploadBox = document.getElementById("upload-box")
// var myXray = document.getElementById("myxray");
// var uploadXrayBtn = document.getElementById("uploadBtn");
// var cancelBtn = document.getElementById("cancel-btn");
// myXray.onclick = function () {
//     alert("i m clicked");
// }

var inputElement = document.getElementById("testFiles");
var cancelButton = document.getElementById("pseudoCancel");
var numFiles = 0;

inputElement.onclick = function (event) {
    var target = event.target || event.srcElement;
    console.log(target, "clicked.");
    console.log(event);
    if (target.value.length == 0) {
        console.log("Suspect Cancel was hit, no files selected.");
        cancelButton.onclick();
    } else {
        console.log("File selected: ", target.value);
        numFiles = target.files.length;
    }
}

inputElement.onchange = function (event) {
    var target = event.target || event.srcElement;
    console.log(target, "changed.");
    console.log(event);
    if (target.value.length == 0) {
        console.log("Suspect Cancel was hit, no files selected.");
        if (numFiles == target.files.length) {
            cancelButton.onclick();
        }
    } else {
        console.log("File selected: ", target.value);
        numFiles = target.files.length;
    }
}

inputElement.onblur = function (event) {
    var target = event.target || event.srcElement;
    console.log(target, "changed.");
    console.log(event);
    if (target.value.length == 0) {
        console.log("Suspect Cancel was hit, no files selected.");
        if (numFiles == target.files.length) {
            cancelButton.onclick();
        }
    } else {
        console.log("File selected: ", target.value);
        numFiles = target.files.length;
    }
}


cancelButton.onclick = function (event) {
    console.log("Pseudo Cancel button clicked.");
}
