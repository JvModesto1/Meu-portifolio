
const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;
let pixels1=0;

btnRight.addEventListener('click', function(c){
    
    if (pixels >=1000){
        return;
    }
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});


btnLeft.addEventListener('click', function(c){
    if (pixels <= -1000){
        return;
    }
    pixels = pixels - 100;
     elements.style = `transform: translateX(${pixels}px)`;
});

