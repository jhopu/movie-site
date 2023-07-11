const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i) =>  {
  
  const itemNumber=movieLists[i].querySelectorAll("img").length;
  let clickCounter=0;
  arrow.addEventListener("click", ()=>{
    const ratio=Math.floor(window.innerWidth/270);
    clickCounter++;
    if(itemNumber-(5+clickCounter)+(5-ratio)>=0){
  movieLists[i].style.transform = `translateX(${
  movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
  }px)`;}
  else{
movieLists[i].style.transform="translate(0)";
clickCounter=0;
  }
});
console.log(Math.floor(window.innerWidth/270));
});
const ball=document.querySelector(".toggle-ball");
const item=document.querySelectorAll(".container,.movie-list-title,.navbar-container,.left-menu-icon,.toggle,.sidebar");

ball.addEventListener("click",()=>{
  item.forEach(item=>{
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})