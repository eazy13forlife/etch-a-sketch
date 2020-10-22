

//create a divContainer Element;
let divContainer=document.createElement("div");
divContainer.classList.add("container")

  //append the divContainer to our body element in our html
  document.querySelector("body").appendChild(divContainer);

  //set the width and heights of our div.container. We can only access our divContainer once its appended to the DOM.
  divContainer.style.width=" 700px"
  divContainer.setAttribute("style","height:700px")
  divContainer.style.border="5px solid black";
  divContainer.style.margin="1em auto 1em auto";

  //set the gridTemplateColumns and rows of the divContainer
  divContainer.style.gridTemplateColumns="repeat(16,1fr)";
  divContainer.style.gridTemplateRow="repeat(16,1fr)";



//create buttons for html page
  //create a make new grid button element;
  const makeNewGridButton=document.createElement("button");
  makeNewGridButton.textContent="Make New Grid";

  //create a clear grid button
  const clearGridButton=document.createElement("button");
  clearGridButton.textContent="Clear Grid";


  //reference to random color button in html
  const randomColorButton=document.querySelector("#red_color")

  //append the button elements to our bodyElement, before the divContainer
  document.querySelector("#button_containers").appendChild(makeNewGridButton);
  document.querySelector("#button_containers").appendChild(clearGridButton);



export{divContainer,randomColorButton,clearGridButton,makeNewGridButton}
