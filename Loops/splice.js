/*let city=['bangalore','mysore','davangere','chitradurga'];

let removeddata=city.splice(1,2);

console.log("this is removed data");


console.log(removeddata);


console.log("this is remaining array");
console.log(city);
*/

/*Adding the Elements*/


let city=['bangalore','mysore','davangere','chitradurga'];

city.splice(1,0,'tumkur','chikamangaluru');
console.log(city);


let city1=['bangalore','mysore','davangere','chitradurga'];
city1.splice(2,3);
console.log(city1);



let city3=['bangalore','mysore','davangere','chitradurga'];
city3.splice(1,1);
console.log(city3);



let city4=['bangalore','mysore','davangere','chitradurga'];

console.log("New array");
let newcity=city4.slice(1);
console.log(newcity);
