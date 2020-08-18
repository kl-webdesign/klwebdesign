
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page1Content = document.querySelector('.page1Content');
const page2Content = document.querySelector('.page2Content');
var navLink = document.querySelectorAll('.navLink');
const webDesign = document.querySelector('#web-design');
const logo = document.querySelector('#logo');
const navHover = document.querySelector('.navLink:hover');
const body = document.querySelector('body');



window.addEventListener('scroll', () => {
  const limit = 0.2;
  const opacityLimit = 0.07;
  y=0;
  if(window.scrollY < limit*window.innerWidth){
    y =0;
  }if (window.scrollY>=limit*window.innerWidth) {
    y = (window.scrollY-limit*window.innerWidth);
  }if(y >=255){
    y = 255;
  }

  o=0;
  if(window.scrollY < opacityLimit*window.innerWidth){
    o =0;
  }if (window.scrollY>=opacityLimit*window.innerWidth) {
    o = (window.scrollY-opacityLimit*window.innerWidth);
  }if(o >=100){
    o = 100;
  }

  y2 =0;
  o2 = 0;
  if(window.scrollY < ((window.innerHeight+limit)*window.innerWidth)){
    y2=0;
  }if(window.scrollY >= (window.innerHeight+limit*window.innerWidth)){
    y2 =  (window.scrollY-limit*window.innerWidth-window.innerHeight);
  }if(y2>=255){
    y2=255;
  }

  if(window.scrollY < ((window.innerHeight+opacityLimit)*window.innerWidth)){
    o2=0;
  }if(window.scrollY >= (window.innerHeight+opacityLimit*window.innerWidth)){
    o2 =  (window.scrollY-opacityLimit*window.innerWidth-window.innerHeight);
  }if(o2>=100){
    o2=100;
  }

  console.log(o + ' ' + o2);
  if(window.scrollY>=window.innerHeight){
    c = Math.floor(y2);
    opacity = 1 - (o2/100);
  }
  if(window.scrollY<=window.innerHeight){
    c = 255-Math.floor(y);
    opacity = o/100;
  }



     page1.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     page2.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     page3.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     body.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     page2Content.style.opacity = opacity;
     page1Content.style.opacity = 1-opacity;

     webDesign.style.backgroundColor = `rgb(${255-c}, ${255-c}, ${255-c})`;
     webDesign.style.color = `rgb(${c}, ${c}, ${c})`;
     logo.style.fill = `rgb(${255-c}, ${255-c}, ${255-c})`;
     for (var i = 0; i < navLink.length; i++) {
       navLink[i].style.color = `rgb(${255-c}, ${255-c}, ${255-c})`;
     }




})
