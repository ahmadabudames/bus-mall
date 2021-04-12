'use strict';

// let imagesElement= document.getElementById('images');
// console.log(imagesElement);
let rightElement=document.getElementById('right')
console.log(rightElement);

let centerElement=document.getElementById('center');
let leftElement=document.getElementById('left');

let maxAttemps=10;
let userAttemps=0;

let rightIndex;
let centerIndex;
let leftIndex;

function busMall(name,source){
    this.name=name;
    this.source=source;
    this.votes=0;

    busMall.allBusMall.push(this)
}

busMall.allBusMall=[];

new busMall('bag','image/bag.jpg');
new busMall('banana','image/banana.jpg');
new busMall('bathroom','image/bathroom.jpg');
new busMall('boots','image/boots.jpg');
new busMall('breakfast','image/breakfast.jpg');
new busMall('bubblegum','image/bubblegum.jpg');
new busMall('chair','image/chair.jpg')
new busMall('cthulhu','image/cthulhu.jpg');
new busMall('dog-duck','image/dog-duck.jpg');
new busMall('dragon','image/dragon.jpg');
new busMall('pen','image/pen.jpg');
new busMall('pet-sweep','image/pet-sweep.jpg');
new busMall('scissors','image/scissors.jpg');
new busMall('shark','image/shark.jpg');
new busMall('sweep','image/sweep.png');
new busMall('tauntaun','image/tauntaun.jpg');
new busMall('unicorn','image/unicorn.jpg');
new busMall('usb','image/usb.gif');
new busMall('water-can','image/water-can.jpg');
new busMall('wine-glass','image/wine-glass.jpg');

console.log(busMall.allBusMall);

function randomIndex(){
    return Math.floor(Math.random()* busMall.allBusMall.length);
}
// console.log(randomIndex);

function renderImages(){
    leftIndex=randomIndex();
    rightIndex=randomIndex();
    centerIndex=randomIndex();

    while (leftIndex===rightIndex){
        rightIndex=randomIndex();
        
        
    }
    
    while (leftIndex===centerIndex){
        centerIndex=randomIndex();
        
        
    }
    while (rightIndex===centerIndex){
        centerIndex=randomIndex();
        
        
    }
   

    leftElement.src=busMall.allBusMall[leftIndex].source;

rightElement.src=busMall.allBusMall[rightIndex].source;

centerElement.src=busMall.allBusMall[centerIndex].source;
}
renderImages();

leftElement.addEventListener('click',userClick);
centerElement.addEventListener('click',userClick);
rightElement.addEventListener('click',userClick);

function userClick(event){
    userAttemps++;


    if (userAttemps<=maxAttemps){
        if(event.target.id==='left'){
            busMall.allBusMall[leftIndex].votes++;
        }else if(event.target.id==='center'){
            busMall.allBusMall[centerIndex].votes++;
        }else {
            busMall.allBusMall[rightIndex].votes++;
        }
        console.log(busMall.allBusMall);
        renderImages();

       
    }else{
     
        let list=document.getElementById('result');
        let busMallResult;
        for(let i=0; i<busMall.allBusMall.length;i++){
            busMallResult=document.createElement('li');
            list.appendChild(busMallResult);
        
        busMallResult.textContent=`${busMall.allBusMall[i].name} has ${busMall.allBusMall[i].votes}`
        
        }
        leftElement.removeEventListener('click',userClick);
        centerElement.removeEventListener('click',userClick);
        rightElement.removeEventListener('click',userClick);


    }
}


