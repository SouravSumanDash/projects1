let uName = "Vijay";
// when using JS with HTML enclose JS code within {}
let elemt = <h1>Hello {uName}</h1>;

const mobiles = ["APPLE", "Samsung", "POCO", "OPPO", "REDMI", "REALME"];
let oneMobile = mobiles.map((value, index) => {
    return <li key={index}>{value}</li>;
});

ReactDOM.render(
   <div>
    {elemt}
    {oneMobile}
   </div>,
   document.getElementById("root")
);