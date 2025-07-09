let uNameElt = document.getElementById("uname");
console.log("uNameElt", uNameElt);

function hideName(){
    console.log("hideName executed");
    uNameElt.style.visibility = "hidden";
    // uNameElt.style.display = "none";
}
function showName(){
    //uNameElt.style.visibility = "visible";
    uNameElt.style.display = "block";

}
function showHideName(){
    if (uNameElt.style.visibility === "hidden"){
        uNameElt.style.visibility = "visible";
 } else {
    uNameElt.style.visibility="hidden";
 }

}
let clickoBtn = document.getElementById("clicko");
console.log("clickoBtn", clickoBtn);

//addEventListener
clickoBtn.addEventListener("click", function (event){
    event.preventDefault();
    //console.log("event", event);
    console.log("clicko btn is clicked");
    
});

clickoBtn.addEventListener("mouseover", function(){
    console.log(" clicko button mouseover");
    
});


