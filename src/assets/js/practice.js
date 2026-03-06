/*
Problem: print number 1 to 10

solution
print 1 to 10 using for loop

print number

increment after print

print again
*/
let printNumber = function () {
    const output = document.getElementById("output");
    for (let i = 1; i <= 10; i++) {
        output.innerHTML += i + "<br>";
    }
    output.innerHTML += "End Loop";
}
//----------------------------------
/*
sum two number

solution
take two number from user

add two number

print result
*/

let sum = function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

//----------------------------------

let isEven = function () {
    const num = parseInt(document.getElementById("num").value);
    
    if (num % 2 === 0) {
        output3.innerHTML = `${num} is even number.`;
    }
    else {
        output3.innerHTML = `${num} is odd number.`;
    }
}
document.getElementById("check").addEventListener("click", isEven);