const colors = ["green", "red", "rgba(133,122,200)","#f15025"];

const button = document.querySelector('.btn');
const background = document.querySelector('body');
const code =  document.querySelector('.color-code');

button.addEventListener('click',function(){
    console.log('working');
    
    //get random number between 0 - 3
    //multipling by lenght and round off to the nearest whole
    const randomNumber = Math.floor(getRandomNumber() * colors.length) ;
    code.textContent = colors[randomNumber];
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    

})

function getRandomNumber(){

    return Math.random() ;
}
