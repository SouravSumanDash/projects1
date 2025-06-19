function outer(n1){
    let num1 = n1;
    function inner(){
        let num2 = 20;
        let total = num1 + num2;
        console.log("total", total);
        
    }
    return inner;
}
outer(10)(); //function currying
