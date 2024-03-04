"use strict";
let menu = document.getElementById("menu");
let navModal = document.getElementById("navigationLinksContainerTwo");
let body = document.getElementById("body");
let closeIcon = document.getElementById("closeIcon");
let checkState = true;
let showModal = function () {
    if (checkState === true) {
        navModal.classList.remove("navigationLinksContainerTwo");
        navModal.classList.add("navigationLinksContainerTwoVisible");
        checkState = false;
    }
    else if (checkState === false) {
        navModal.classList.remove("navigationLinksContainerTwoVisible");
        navModal.classList.add("navigationLinksContainerTwo");
        checkState = true;
    }
};
// let hideModal = function(){
//     if(checkState === false){
//         navModal.classList.remove("navigationLinksContainerTwoVisible")
//         navModal.classList.add("navigationLinksContainerTwo")
//     }else if()
// }
menu.addEventListener("click", showModal);
closeIcon.addEventListener("click", showModal);
