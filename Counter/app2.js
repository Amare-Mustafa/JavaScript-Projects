/*save the list of buttons as an array 
so we can iterate over and choose*/

const allButtons = Array.from(document.querySelectorAll('.buttons'));
console.log(Array.isArray(allButtons));// true

allButtons.forEach(allButtons => {
    allButtons.addEventListener('click', (buttons) => {
        
        
    })
});
for(i = 0; i > allButtons.length; i++){
            console.log(allButtons[i]);
};