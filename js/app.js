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

let votesArray=[];
let showArray=[];
let nameArray=[];


function busMall(name,source){
    this.name=name;
    this.source=source;
    this.votes=0;
    this.shown=0;
nameArray.push(this.name);
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
    busMall.allBusMall[leftIndex].shown++;

rightElement.src=busMall.allBusMall[rightIndex].source;
busMall.allBusMall[rightIndex].shown++;

centerElement.src=busMall.allBusMall[centerIndex].source;
busMall.allBusMall[centerIndex].shown++;

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
     let button=document.getElementById('button');

     button.addEventListener('click',results);
     button.hidden=false;
for(let i=0; i<busMall.allBusMall.length;i++){
votesArray.push(busMall.allBusMall[i].votes);
showArray.push(busMall.allBusMall[i].shown);}

chart();

leftElement.removeEventListener('click',userClick);
        centerElement.removeEventListener('click',userClick);
        rightElement.removeEventListener('click',userClick);
    }


}
function results(){
        let list=document.getElementById('result');
        let busMallResult;
        for(let i=0; i<busMall.allBusMall.length;i++){
            busMallResult=document.createElement('li');
            list.appendChild(busMallResult);
        
        busMallResult.textContent=`${busMall.allBusMall[i].name} has ${busMall.allBusMall[i].votes}`
        
        }
        button.removeEventListener('click',results);

    }
    function chart() {
        let ctx = document.getElementById('ChartVeiw').getContext('2d');
        
        let chart= new Chart(ctx,{
          // what type is the chart
         type: 'bar',
      
        //  the data for showing
         data:{
          //  for the names
            labels: nameArray,
            
            datasets: [
              {
              label: 'Goats votes',
              data: votesArray,
              backgroundColor: [
                'Orange',
              ],
        
              borderWidth: 1
            },
      
            {
              label: 'Goats shown',
              data: showArray,
              backgroundColor: [
                'Gray',
              ],
        
              borderWidth: 1
            }
            
          ]
          },
          options: {}
        });
        
      }
  