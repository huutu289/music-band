let carouselArray = 
[
    {
        img: 'chicago',
        city: 'Chicago',
        text: 'Chicago Lorem ipsum dolor',
    },
    {
        img: 'new-york',
        city: 'New York',
        text: 'New York Lorem ipsum dolor sit amet consectetur',
    },
    {
        img: 'los-angeles',
        city: 'Los Angeles',
        text: 'Los Angeles  placeat pariatur dolor, aliquid quas illo id qui, mollitia aperiam minima ab dolorem!',
    }
    
];
let sliderBg = document.querySelector('#slider>.slider-bg');
let headding = sliderBg.firstElementChild.firstElementChild;
let txt  = sliderBg.firstElementChild.lastElementChild;

let count = 0;
let ArrayLength = carouselArray.length;
setInterval(function(){
    if(count===ArrayLength-1)
    {
        count=0;
    }
    else{
        ++count;
    }
    sliderBg.style.backgroundImage =  `url(./imgs/sliders/${carouselArray[count].img}.jpg`;
    headding.textContent = carouselArray[count].city;
    txt.textContent = carouselArray[count].text;
},2000);