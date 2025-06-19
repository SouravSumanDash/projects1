function changethetitle(){
  const title = document.getElementById('title');
  // console.log("Before:", title.textContent); // Debug
  
  if (title.textContent === "HI WE ARE LEARNING DOCUMENT"){
    title.textContent = "India";
    // console.log("Changed to India");
  } else {
    title.textContent = "HI WE ARE LEARNING DOCUMENT";
    // console.log("Changed to HI WE ARE LEARNING DOCUMENT");
  }
  
  //console.log("After:", title.textContent); // Debug
}
