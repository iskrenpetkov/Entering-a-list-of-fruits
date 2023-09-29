
let form = document.getElementById("myForm");
let inputField = document.getElementById("textInput");
let dataList = document.getElementById("dataList");
let btn = document.getElementById('submit');


let inputData = [];


function handleSubmit(event) {
    event.preventDefault();

    let userInput = inputField.value;

    if (userInput.trim() !== "") {

        inputData.push(userInput);


        let listItem = document.createElement("li");
        listItem.textContent = userInput;
        dataList.appendChild(listItem);


        inputField.value = "";
    }
    btn.style.background = 'blue';
    btn.style.color = 'white';
    btn.style.borderRadius = '10px';
    
    inputField.style.color = 'blue';
    inputField.style.fontSize = '18px';

    

}


form.addEventListener("submit", handleSubmit);


function removeItem() {
    let myList = document.getElementById("dataList");
    let listItems = myList.getElementsByTagName("li");
    let btn = document.getElementById('remove-list');
    let lastItem = listItems[listItems.length - 1];
    if (lastItem) {
        myList.removeChild(lastItem);
    }

    btn.style.background = 'red';
    btn.style.color = 'white';
    btn.style.borderRadius = '10px';
    
    
}

function TotalPproducts() {

    let liElements = document.querySelectorAll('li');

    let totalCountElement = document.getElementById('rezult');

    let totalCount = liElements.length;

    totalCountElement.textContent = `Total products: ${totalCount + 1}`;
    totalCountElement.style.border = 'groove';
}
function TotalPproductsRemove() {

    let liElements = document.querySelectorAll('li');

    let totalCountElement = document.getElementById('rezult');

    let totalCount = liElements.length;

    totalCountElement.textContent = `Total products: ${totalCount}`;
    totalCountElement.style.border = 'groove';
}
