const bodyElem = document.querySelector("body")
const input = document.querySelector(".check")

input.checked = JSON.parse(localStorage.getItem("mode"))
updateBody()

input.addEventListener("click", () => {
    updateBody()
    updateLocalStorage()
})

function updateBody(){
    if(input.checked){
        bodyElem.style.background = "black"
    }else{
        bodyElem.style.background = "white"
    }
}

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(input.checked))
}

