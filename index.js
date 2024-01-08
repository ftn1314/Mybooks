var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
var addbutton=document.querySelector(".add-button")

addbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})
// select cancel popup
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})
// select container,add-book,book-title-input,book-author-input,Description-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var descriptioninput=document.getElementById("description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${descriptioninput.value}</p>
    <button onclick="deletebook(event)">delete</button>` 
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}