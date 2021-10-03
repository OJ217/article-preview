const addShareBtn = document.getElementById("share-button-activate");
const removeShareBtn = document.getElementById("share-button-deactivate");
const shareComponent = document.querySelector(".share-component");

addShareBtn.addEventListener("click", ()=>{
    shareComponent.classList.toggle("hide-share-component");
});

removeShareBtn.addEventListener("click", ()=>{
    shareComponent.classList.add("hide-share-component")
});