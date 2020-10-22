import{returnRandomRGB,createSetGrid,divContainer,changeItemColor,createDynamicGrid} from "./functions.js"
import{randomColorButton,makeNewGridButton,clearGridButton} from "./inlinecss.js"

let squaresPerSide;

//from the getgo, run createSetGrid fuction with 256 grid items and the color green;
createSetGrid(256,"green");

//event listener for makeNewGridButton element
makeNewGridButton.addEventListener("click",(e)=>{
  //select all the divItem elements that have a class of box using document.querySelectorAll and the class of the items we want to select.This ends up selecting all the divItems because they all have a class of box.But if one of the divItem elements didnt have a class of box, it wouldn't be selected.  Dynamically created elements like divItem and divContainer have to be appended to our DOM before being able to retrieve it from the DOM with a class or id selector
  const allDivItems=document.querySelectorAll("div.box");
  //for each box, if it contains the class, color,  Remove that style attribute. If we only removethe class name of color, the attribute will still be there because it is applied todivItem as a whole, not to a specific class.
  allDivItems.forEach((divItem)=>{
    divItem.removeAttribute("style");
  })
  createDynamicGrid();
});


//event listener for red ColorButton
randomColorButton.addEventListener("click",(e)=>{
  console.log(e.target)
  changeItemColor(e.target.innerHTML)
});

//event listener on random color buttob
document.querySelector("#random").addEventListener("click",(e)=>{
  changeItemColor(`rgb(${returnRandomRGB()})`)
})

//event listener for clear grid button
clearGridButton.addEventListener("click",(e)=>{
  const allDivItems=document.querySelectorAll("div.box")
  allDivItems.forEach((divItem)=>{
    divItem.removeAttribute("style");
  })
})
window.addEventListener("dblclick",(e)=>{
throw new error
})
