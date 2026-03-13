let sales = [];
let sum = 0;
function addSale() {
    const inputAmount = document.getElementById("inputAmount").value;
    const value = parseFloat(inputAmount);

    if (isNaN(value)){
        window.alert("Please enter a valid number");
        return;
    }

    if (value < 0){
        window.alert("Please enter a positive number");
        return;
    }
    sales.push(value);
    document.getElementById("saleList").innerHTML = sales.join("<br>");
}

function sumArray() {
    for(let i = 0; i < sales.length; i++) {
        sum += sales[i]
    }
    document.getElementById("total").innerHTML = `Total Sales: ${sum}`;
}

function clearSales() {
    sales = [];
    sum = 0;

    document.getElementById("saleList").innerHTML = "";
    document.getElementById("total").innerHTML = "Total Sales: ";
}


let score = [];
let highest = 0;

function addScore(){
    const inputScore = document.getElementById("score").value;
    const value = parseInt(inputScore);

    if (isNaN(value)) {
        window.alert("Please enter a valid score");
        return;
    }

    score.push(value);
    document.getElementById("scoreList").innerHTML = score.join("<br>")
}

function findHighestScore(){
    highest = Math.max(...score);
    document.getElementById("highestResult").innerHTML = `The Highest Score is: ${highest}`
}

function clearScore(){
    sales = [];
    highest = 0;

    document.getElementById("scoreList").innerHTML = "<br>";
    document.getElementById("highestResult").innerHTML = "The Highest Score is: ";
}

let temp = [];
let lowest = 0;

function addTemp(){
    const inputTemp = document.getElementById("temp").value;
    const value = parseFloat(inputTemp);

    temp.push(value);
    document.getElementById("tempList").innerHTML = temp.join("<br>");
}

function findLowest(){
    lowest = Math.min(...temp);
    document.getElementById("lowestResult").innerHTML = `The lowest temperature is: ${lowest}`;
}

function clearTemp(){
    temp = [];
    lowest = 0;

    document.getElementById("tempList").innerHTML = temp.join("<br>");
    document.getElementById("lowestResult").innerHTML = "The lowest temperature is: ";
}

let student = [];
let count = 0;

function addCount(){
    const inputStudent = document.getElementById("studentName").value;
    student.push(inputStudent);
    document.getElementById("studentList").innerHTML = student.join("<br>");
}

function studentCount(){
    count = student.length;

    document.getElementById("totalCount").innerHTML = `The total count is ${count}`;
}

function clearCount(){
    student = [];
    count = 0

    document.getElementById("studentList").innerHTML = student.join("<br>");
    document.getElementById("totalCount").innerHTML = `The total count is `;
}


function calculatePrice(){
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    const totalPrice = price * quantity;

    document.getElementById("totalPrice").innerHTML = `Total price is ${totalPrice}`;
}

function clearCart(){
    document.getElementById("totalPrice").innerHTML = "";
}