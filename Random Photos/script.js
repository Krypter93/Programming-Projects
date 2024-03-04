let button = document.querySelector(".btn")
let mainContainer = document.querySelector(".image-container")

button.addEventListener("click", () => {
    for (let index = 0; index < 4; index++) {
        const imageElem = document.createElement("img")
        imageElem.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 5000)}`
        mainContainer.appendChild(imageElem)    
    }  
})

// The functionality to generate images should be inside a function 
