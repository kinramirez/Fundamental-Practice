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
    document.getElementById("total").innerHTML = "Total Sales: " + sum;
}

function clearSales() {
    sales = [];
    sum = 0;

    document.getElementById("saleList").innerHTML = "";
    document.getElementById("total").innerHTML = "Total Sales: ";
}