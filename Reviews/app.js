//REVIEW ARRAY CONTAINING OBJECTS

const reviews = [
    {
        id: 0,
        name: "Naruto Uzumaki",
        job:"Hokage",
        img:"/Reviews/images/naruto.jpg",
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem ut laborum odit dolore, accusamus nostrum, vero quam temporibus corrupti atque aut magni? Nobis fuga sint veritatis commodi alias sit.",
    },

    {
        id: 1,
        name: "Sasuke Uchiha",
        job: "ex Rogue Ninja",
        img: "https://i.pinimg.com/originals/ec/4f/10/ec4f10388c36eeb2e520a175c941399a.jpg",
        info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

    },
    {
        id: 2,
        name: "Sakura Haruno",
        job: "Being disliked",
        img: "https://i.pinimg.com/originals/8d/24/54/8d2454ddf15180f799ce07553145b45a.jpg",
        info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",

    },
    {
        id:3,
        name:"Sai",
        job:"Investigator",
        img:"https://i.pinimg.com/originals/08/65/1f/08651fe4cf3d5e0624c41c579938298d.jpg",
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem ut laborum odit dolore, accusamus nostrum, vero quam temporibus corrupti atque aut magni? Nobis fuga sint veritatis commodi alias sit.",
    },
    {
        id:4,
        name:"Kakashi Hatake",
        job:"ex Hokage",
        img:"https://i.pinimg.com/originals/84/0d/3b/840d3b6baabaaab4396df7a013ba8d61.jpg",
        info:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
]

// Elements that are gonna change
const image = document.getElementById('person-img');
const names = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');

//Buttons 
const nextBtn = document.querySelector('.next-button');
const prevBtn = document.querySelector('.prev-button');
const random = document.querySelector('.random');

//setting the first item
let currentItem = 0;

//loads first with the page

window.addEventListener('DOMContentLoaded', ()=>{
    showPerson(currentItem);
})

// 
function showPerson(){
    const items = reviews[currentItem];
    image.src = items.img;
    names.innerText = items.name;
    job.textContent = items.job;
    info.textContent = items.info;

}
//random number generator
function randomNumber (){
    let number = Math.floor(Math.random(5)*reviews.length);
    return number;
}

//next person
nextBtn.addEventListener('click', () => {
    currentItem ++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    } else{
        showPerson(currentItem)}
})
prevBtn.addEventListener('click', ()=>{
    currentItem --;
    if(currentItem < 0 ){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})
random.addEventListener('click',()=>{
    console.log(randomNumber());
    currentItem = randomNumber();
    showPerson(currentItem)
})