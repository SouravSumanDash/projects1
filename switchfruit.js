let fruit = prompt("Enter a fruit (banana, apple, orange, grape):").toLowerCase();

switch(fruit) {
    case "banana":
        alert("Bananas are yellow.");
        break;
    case "apple":
        alert("Apples are red or green.");
        break;
    case "orange":
        alert("Oranges are orange!");
        break;
    case "grape":
        alert("Grapes can be green or purple.");
        break;
    default:
        alert("I don't have information about that fruit.");
}
