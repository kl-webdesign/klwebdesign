
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page4 = document.querySelector('.page4');
const page1Content = document.querySelector('.page1Content');
const page2Content = document.querySelector('.page2Content');
const page3Content = document.querySelector('.page3Content');
const page4Content = document.querySelector('.page4Content');
var navLink = document.querySelectorAll('.navLink');
const webDesign = document.querySelector('#web-design');
const logo = document.querySelector('#logo');
const navHover = document.querySelector('.navLink:hover');
const navContainer = document.querySelector('#navContainer');
const body = document.querySelector('body');



window.addEventListener('scroll', () => {
  const limit = 0.2;
  const opacityLimit = 0.07;

//page 1
  if(window.scrollY<=window.innerHeight){
    c = 255-Math.floor(scrollFade(0.1,0,255));

    page1Content.style.opacity = fadeOut(0);
    page2Content.style.opacity = fadeIn(0);

  }
  //page 2
  if(window.scrollY>=window.innerHeight  && window.scrollY <= 2*window.innerHeight){
    c = Math.floor(scrollFade(0.1,1,255));
    page2Content.style.opacity = fadeOut(1);
    page3Content.style.opacity = fadeIn(1);
  }
  //page3
  if(window.scrollY>2*window.innerHeight){
    c = 255-Math.floor(scrollFade(0.1,2,255));
    page3Content.style.opacity = fadeOut(2);
    page4Content.style.opacity = fadeIn(2);
  }



     page1.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     navContainer.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     page2.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     page3.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     page4.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     body.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;

     webDesign.style.backgroundColor = `rgb(${255-c}, ${255-c}, ${255-c})`;
     webDesign.style.color = `rgb(${c}, ${c}, ${c})`;
     logo.style.fill = `rgb(${255-c}, ${255-c}, ${255-c})`;
     for (var i = 0; i < navLink.length; i++) {
       navLink[i].style.color = `rgb(${255-c}, ${255-c}, ${255-c})`;
     }


})


function scrollFade(limit,page,range){
  y=0;
  if(window.scrollY < (limit*window.innerWidth)+(page*window.innerHeight)){
    y =0;
  }if (window.scrollY>=(limit*window.innerWidth)+(page*window.innerHeight)) {
    y = (window.scrollY-((limit*window.innerWidth)+(page*window.innerHeight)));
  }if(y >=range){
    y = range;
  }

  return y;
}

function fadeIn(page){
  return scrollFade(0.2,page,100)/100;
}
function fadeOut(page){
  return 1-((scrollFade(0.1,page,100))/100);
}
