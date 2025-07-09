let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function(event) {
    event.preventDefault()
// console.log("submitBtn clicked", event);
let formData = document.forms['formData']
let nameField = formData.exampleInputName1
let numberField = formData.exampleInputNumber1

let isValidName = validateName(nameField.value)
let isValidNumber = validateNumber(numberField.value)
console.log("isValidName", isValidName);
console.log("isValidNumber", isValidNumber);

if (isValidName && isValidNumber) {

    saveData(nameField.value, numberField.value)
    displayData()

    // make an api call and send the data to backend
    setTimeout(()=> {
        alert("Submitted successfully")
        nameField.value=""
        numberField.value=""
    },100)
}
})
searchInput.addEventListener('input',displayData)

let validateName = (nameValue) => {
    if(nameValue) {
        if (/^[a-zA-Z]+$/.test(nameValue)) {
         document.getElementById('emptyName').style.display = 'none'
         document.getElementById('invalidName').style.display = 'none'
         return true
     } else {
        document.getElementById('emptyName').style.display = 'none'
        document.getElementById('invalidName').style.display = 'block'
        return false
     }
    } else {
        document.getElementById('emptyName').style.display = 'block'
        document.getElementById('invalidName').style.display = 'none'
        return false
    }
}

let validateNumber = (numberValue) => {
    if (numberValue) {
        if (/^(\+91|\+91\-|0)?[789]\d{9}$/.test(numberValue)) {
           document.getElementById('emptyNumber').style.display = 'none'
           document.getElementById('invalidNumber').style.display = 'none'
           return true
        } else {
     document.getElementById('emptyNumber').style.display = 'none'
     document.getElementById('invalidNumber').style.display = 'block'   
     return false
    }
} else{
        document.getElementById('emptyNumber').style.display = 'block'
        document.getElementById('invalidNumber').style.display = 'none'
        return false
    }
    
}

function saveData(name,number) {
    debugger;
    const extData = JSON.parse(localStorage.getItem('formData')) || [];
    extData.push({name,number})
    localStorage.setItem('formData',JSON.stringify(extData))
    displayData()

}

function displayData(){
    const dataTable= document.getElementById("data-table")
    dataTable.innerHTML=''
    const extData = JSON.parse(localStorage.getItem('formData')) || [];
     
    const searchValue = searchInput.value

    extData.forEach(element => {
        if(element.name.toLowerCase().includes(searchValue)){

            const row = document.createElement("tr")
            row.innerHTML=`<td>${element.name}</td>
                            <td>${element.number}</td>`
            dataTable.appendChild(row)
        }
    });
}
document.addEventListener('DOMContentLoaded', displayData)
