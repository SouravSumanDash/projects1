const proto = {
 protoname:"xyz",
}


const animal=Object.create(proto);
animal.name="rabbit";
animal.age=5;
console.log(animal);