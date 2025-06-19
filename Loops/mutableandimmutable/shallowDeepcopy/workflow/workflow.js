let firstFunc = () => {
    console.log("FirstFunc executed");
    setTimeout(() => {
        console.log("test your brain");
    }, 2000);
};

let secondFunc = () =>  {
    console.log("SecondFunc executed");
    setTimeout(() => {
        console.log("test your brain again");
     }, 1000);
    
};

let thirdFunc = () => {
    console.log("ThirdFunc executed");
    setTimeout(() => {
      console.log("Now guess the output");

    }, 0); //time is 0 still it will follow the same flow
    
};

firstFunc();
secondFunc();
thirdFunc();