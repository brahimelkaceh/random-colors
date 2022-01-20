let colors = ["tomato", "green","blue","yellow", "black"];
let btn = document.getElementById("btn");
let color = document.querySelector('.color');

btn.addEventListener('click', () =>{
    let randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log(randomNumber)
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};