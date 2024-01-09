//Get DOM elements
let question = document.querySelector('#question')
const input= document.querySelector('input')
let button = document.querySelector('#btn')
let score = document.querySelector(`#score`)
let points = JSON.parse(localStorage.getItem('score'))

//When no points stored
if(!points){
    points = 0
}

//Show the score
score.textContent = `Score: ${points}`


//Generate random numbers
const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

question.textContent = `What is ${num1} multiply by ${num2}`

const result = num1 * num2

//Event on button
button.addEventListener('click', () =>{
    if(!input.value){
        alert('Enter a number')
    }
    else if(isNaN(input.value)){
        alert('Enter a number')
    }else if(parseInt(input.value) == result){
        points++
        storage()
    }else{
        points--
        storage()
    }
})


//Store score
function storage(){
    localStorage.setItem('score', JSON.stringify(points))
}








