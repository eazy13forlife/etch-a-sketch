import{divContainer} from "./inlinecss.js"

//create divItem globally so we can use it whenever. If we don't include this, it will only live in the for loop function
let divItem;

//return random rgb in correct format ex 43,54,87
const returnRandomRGB=()=>{
  let numbers="";
  for(let i=1;i<=3;i++){
    if(i!==3){
     const newNumber=Math.ceil(Math.random()*255);
     numbers+=`${newNumber}, `;
    }else{
     const newNumber=Math.ceil(Math.random()*255);
     numbers+=newNumber;
    }
  }
return numbers;
}


//function that creates certain number of grid items  inside a divContainer Element.Also, takes in the color that you want
const createSetGrid=(totalNumber,color)=>{
  for(let i=1;i<=totalNumber;i++){
    divItem=document.createElement("div");
    //class names shouldnt begin with a number. Should begin with a letter, underscore or a hypen. We created class of box to give border to the box in css
    divItem.classList.add(`_${i}`, "box");
    //add a mouseover event for each divItem. If mouseover is fired, add a style attribute to "this" div that we have the event listener on , divItem. It will be added to each and every divItem element. If we want to be specific about adding attributes to specific classes of a certain element,, we have to first see if that element contains the class so and so using classList.contains() and if it does, then we run a function that adds a style to that specific element. We have to use "this" keyword to address the divItem we are talking about. And remember, we can't use this with arrow functions unless the arrow function has a this value from its parent.
    divItem.addEventListener("mouseover",function(e){
      //if this divItem does not have a class of selected
      if(!this.classList.contains("selected")){
        //add a background-color of green when a mouse moves over that div
        this.setAttribute("style",`background-color:${color}`);
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
          this.setAttribute("style",`background-color:${color}`);
          this.classList.add("selected")
        })
    }
    })
    //append this divItem to the divContainer
    divContainer.appendChild(divItem);
  }
}



//create a new grid based on user input
const createDynamicGrid=()=>{
  //ask the user how many squares per side they want and store that string value in squaresPerSide variable
  const squaresPerSide=+prompt("how many squares per side to make new grid?.Max is 50")
  //if +prompt can turn that string value into a number, then that means the user didn't enter a number, so we run makeNewGrid from the start until the user enters a number
  if(!squaresPerSide||squaresPerSide>50){
    createDynamicGrid();
  //if user entered a valid number
  }else{
    //remove everything from inside the divContainer, so we can recreate new columns and grids. We could also forEach every divItem to remove each one
    divContainer.innerHTML=""
    //set new the gridtemplatecolumns and grid template rows
    divContainer.style.gridTemplateColumns=`repeat(${squaresPerSide},1fr)`;
    divContainer.style.gridTemplateRow=`repeat(${squaresPerSide},1fr)`;
  }

  createSetGrid((squaresPerSide*squaresPerSide),"blue");
}

/*
//change color of grid
const buttonGridColor=(color)=>{
  const allDivItems=document.querySelectorAll("div.box");
  allDivItems.forEach((divItem)=>{
    divItem.addEventListener("mouseover",function(e){
      changeGridColor(divItem,color);
    })
  })
}
*/
//function that changes the background color of each div when mouse goes over it
const changeItemColor=(color)=>{
  const allDivItems=document.querySelectorAll("div.box");
  allDivItems.forEach((divItem)=>{

    divItem.addEventListener("mouseover",function(e){
      //so the first mouseover event says if not selected, add a class of selected and make background-color green. That runs first. then this mouseover event runs immediately after. It sees that the current divItem already has a class of selected due to the first mouse over event, and it  just changes the divItem background-color to red.
      if(this.classList.contains("selected")){
        this.setAttribute("style",`background-color:${color}`);
      //the first mouseover event says if it is selected, remove the class of selected and make background-color nothing. That runs first. this mouseover event runs immedaitely after. it sees that the current divItem already doesnt have a class of selected. but there are no rules applies in this event, so it keeps the background-color of none.
      }else{
        this.addEventListener("click",(e)=>{
          this.setAttribute("style",`background-color:${color}`);
          this.classList.add("selected")
        })
      }
    });
  });
}


export{returnRandomRGB,createSetGrid,divContainer,changeItemColor,createDynamicGrid}
