//create divItem globally so we can use it whenever. If we don't include this, it will only live in the for loop function
let divItem;

//create a divContainer Element;
let divContainer=document.createElement("div");
divContainer.classList.add("container")



//create a button element;
const button=document.createElement("button");
button.textContent="Clear Grid";


//create 256 div items in order to go inside a divContainer Element
for(let i=1;i<=256;i++){
  divItem=document.createElement("div");
  //class names shouldnt begin with a number. Should begin with a letter, underscore or a hypen. We created class of box to give border to the box in css
  divItem.classList.add(`_${i}`, "box");
  //add a mouseover event for each divItem. If mouseover is fired, add a style attribute to "this" div that we have the event listener on , divItem. It will be added to each and every divItem element. If we want to be specific about adding attributes to specific classes of a certain element,, we have to first see if that element contains the class so and so using classList.contains() and if it does, then we run a function that adds a style to that specific element. We have to use "this" keyword to address the divItem we are talking about. And remember, we can't use this with arrow functions unless the arrow function has a this value from its parent.
  divItem.addEventListener("mouseover",function(e){
    this.setAttribute("style","background-color:green")
  })
  //append this divItem to the divContainer
  divContainer.appendChild(divItem);
}

//append the divContainer to our body element in our html
document.querySelector("body").appendChild(divContainer);


//set the width and heights of our div.container. We can only do this once its appened to the DOM.
divContainer.setAttribute("style","width:960px")
divContainer.setAttribute("style","height:960px")

//append the button element to our bodyElement, before the divContainer
document.querySelector("body").insertBefore(button,divContainer);

button.addEventListener("click",(e)=>{
  //select all the divItem elements that have a class of box using document.querySelectorAll and the class of the items we want to select.This ends up selecting all the divItems because they all have a class of box.But if one of the divItem elements didnt have a class of box, it wouldn't be selected.  Dynamically created elements like divItem and divContainer have to be appended to our DOM before being able to retrieve it from the DOM with a class or id selector
  const allDivItems=document.querySelectorAll("div.box");
  //for each box, if it contains the class, color,  Remove that style attribute. If we only removethe class name of color, the attribute will still be there because it is applied todivItem as a whole, not to a specific class.
  allDivItems.forEach((divItem)=>{
    divItem.removeAttribute("style");
  })
  makeNewGrid();
});


//prompt user
const makeNewGrid=()=>{
  const squaresPerSide=+prompt("how many squares per side to make new grid?")
  if(!squaresPerSide){
    makeNewGrid();
  }else{
    divContainer.setAttribute("style",`grid-template-columns:repeat(${squaresPerSide}, 1fr)`)
    divContainer.setAttribute("style",`grid-template-rows:repeat(${squaresPerSide}, 1fr)`)
    for(let i=1;i<=squaresPerSide**2;i++){
      divItem=document.createElement("div");
      divItem.classList.add(`_${i}`, "box");
      //add a mouseover event for each divItem. If mouseover is fired, add a style attribute to "this" div that we have the event listener on , divItem. It will be added to each and every divItem element. If we want to be specific about adding attributes to specific classes of a certain element,, we have to first see if that element contains the class so and so using classList.contains() and if it does, then we run a function that adds a style to that specific element. We have to use "this" keyword to address the divItem we are talking about. And remember, we can't use this with arrow functions unless the arrow function has a this value from its parent.
      divItem.addEventListener("mouseover",function(e){
        this.setAttribute("style","background-color:green")
      })
      //append this divItem to the divContainer
      divContainer.innerHTML="";
      divContainer.appendChild(divItem);
    }

  }
  document.querySelector("body").innerHTML="";
  document.querySelector("body").appendChild(divContainer);
}
