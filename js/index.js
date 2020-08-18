
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page1Content = document.querySelector('.page1Content')
const page2Content = document.querySelector('.page2Content')




window.addEventListener('scroll', () => {
  const limit = 0.3;
  const opacityLimit = 0.2;
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

    c = 255-Math.floor(y);

     page1.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     page2.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
     page2Content.style.opacity = (y*(100/255))/100;
     page1Content.style.opacity = 1-(o/100);
})
