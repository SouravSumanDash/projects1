let color=prompt("Enter the traffic light color (red, yellow and green):");
color=color.toLowerCase();

if(color==="red"){
    alert("Stop!");

}
else if(color==="yellow"){
    alert("Slow down");
}
else if(color==="green"){
    alert("Go! ");
}
else{
    alert("Invalid color. Please enter red, yellow or green!");
}