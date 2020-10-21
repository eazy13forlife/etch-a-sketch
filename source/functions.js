


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

//create 256 div items in order to go inside a divContainer Element
const createGrid=(totalNumber,color)=>{
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
        //removes background-color of none when we move over it, so we get rid of green
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
  }
  //append this divItem to the divContainer
  divContainer.appendChild(divItem);
}











export{returnRandomRGB};
