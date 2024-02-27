const arr = ["crash", "kick", "snare", "tom"]
const container = document.querySelector(".container")

arr.forEach((elem) => {
    const button = document.createElement("button")
    button.classList.add("btn")
    button.textContent = elem
    button.style.backgroundImage = "url(images/" + elem + ".png)"
    container.appendChild(button)

    const audio = document.createElement("audio")
    audio.src = "sounds/" + elem + ".mp3"
    container.appendChild(audio)

    button.addEventListener("click", () => {
        audio.play()
    })

    window.addEventListener("keydown", (event) => {
        if(event.key == elem.slice(0, 1)){
            audio.play()
            button.style.transform = "scale(0.9)"
        }

        setTimeout(() => {
            button.style.transform = "scale(1)"
        }, 100)
    })
})
