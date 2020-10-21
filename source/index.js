import{returnRandomRGB} from "./functions.js"

//create divItem globally so we can use it whenever. If we don't include this, it will only live in the for loop function
let divItem;

//create a divContainer Element;
let divContainer=document.createElement("div");
divContainer.classList.add("container")

  //append the divContainer to our body element in our html
  document.querySelector("body").appendChild(divContainer);

  //set the width and heights of our div.container. We can only access our divContainer once its appended to the DOM.
  divContainer.setAttribute("style","width:960px")
  divContainer.setAttribute("style","height:960px")

  //set the gridTemplateColumns and rows of the divContainer
  divContainer.style.gridTemplateColumns="repeat(16,1fr)";
  divContainer.style.gridTemplateRow="repeat(16,1fr)";

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
    //if this divItem does not have a class of selected
    if(!this.classList.contains("selected")){
      //add a background-color of green when a mouse moves over that div
      this.setAttribute("style",`background-color:green`);
      //also add a class of selected,so we know its already been selected
      this.classList.add("selected")
  //if this divItem already has a class of selected
  }else{
      //add a background-color of white when we move over it, so we get rid of green
      this.setAttribute("style","background-color:none");
      //remove selected class, so we know its not selected
      this.classList.remove("selected");
      //when selected class is removed, lets also add a click event listener, that allows us to click that div(which doesnt have a selected class) and make it green background.Lets also give it a class of selected so when we mouseover it again, it changes to white because it already has a class of selected
      this.addEventListener("click",(e)=>{
        this.setAttribute("style","background-color:green");
        this.classList.add("selected")
      })
  }
  })

  //append this divItem to the divContainer
  divContainer.appendChild(divItem);
}


//append the button element to our bodyElement, before the divContainer
document.querySelector("body").insertBefore(button,divContainer);

//event listener on button element
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
  //ask the user how many squares per side they want and store that string value in squaresPerSide variable
  const squaresPerSide=+prompt("how many squares per side to make new grid?.Max is 50")
  //if +prompt can turn that string value into a number, then that means the user didn't enter a number, so we run makeNewGrid from the start until the user enters a number
  if(!squaresPerSide||squaresPerSide>50){
    makeNewGrid();
  //if user entered a valid number
  }else{
    //remove everything from inside the divContainer, so we can recreate new columns and grids. We could also forEach every divItem to remove each one
    divContainer.innerHTML=""
    //set new the gridtemplatecolumns and grid template rows
    divContainer.style.gridTemplateColumns=`repeat(${squaresPerSide},1fr)`;
    divContainer.style.gridTemplateRow=`repeat(${squaresPerSide},1fr)`;
  }

  //now this new code creates a new divItem from 1 up until squaresPerSide*squaresPerSide to fill up the new grid inside divContainer
  for(let i=1;i<=squaresPerSide**2;i++){
    const divItem=document.createElement("div");
    //still give each divItem a class of box, because the box class has a border around it
    divItem.classList.add("box");
    divItem.addEventListener("mouseover",function(e){
      this.setAttribute("style","background-color:green")
    })
    divContainer.appendChild(divItem);
  }
}


//function that returns a random color
document.querySelector("#random_color").addEventListener("click",(e)=>{
  console.log(returnRandomRGB());
})
