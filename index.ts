let menu = document.getElementById("menu") as HTMLDivElement
let navModal = document.getElementById("navigationLinksContainerTwo") as HTMLDivElement
let body = document.getElementById("body") as HTMLElement
let closeIcon = document.getElementById("closeIcon") as HTMLDivElement
let checkState:boolean = true

let showModal = function(){
    if(checkState === true){
        navModal.classList.remove("navigationLinksContainerTwo")
        navModal.classList.add("navigationLinksContainerTwoVisible")
        checkState = false
    }else if(checkState === false){
        navModal.classList.remove("navigationLinksContainerTwoVisible")
        navModal.classList.add("navigationLinksContainerTwo")
        checkState = true
    }
    
}

// let hideModal = function(){
//     if(checkState === false){
//         navModal.classList.remove("navigationLinksContainerTwoVisible")
//         navModal.classList.add("navigationLinksContainerTwo")
//     }else if()
// }

menu.addEventListener("click", showModal)

closeIcon.addEventListener("click", showModal)


