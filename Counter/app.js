const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const counter = document.getElementById('number');

let count = 0;

decrease.addEventListener('click', ()=>{
    count -= 1;
    counter.innerText = count;
})

reset.addEventListener('click', ()=>{
    count = 0;
    counter.innerText = count;
})

increase.addEventListener('click', ()=>{
    count += 1;
    counter.innerText = count;
})























// /////// Selecting each button at a timconst number = document.getElementById('number');
// const decreaser = document.getElementById('decrease');
// const reset = document.getElementById('reset');
// const increase = document.getElementById('increase');

// let counter = 0;

// increase.addEventListener('click', function(){
//     counter +=1;
//     number.innerHTML = counter; 
// });
// reset.addEventListener('click', function(){
//     counter = 0;
//     number.innerHTML = counter;
// });

// decreaser.addEventListener('click', function(){
//     counter -=1;
//     number.innerHTML= counter;
// });














