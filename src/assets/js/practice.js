/*
Problem: print number 1 to 10

solution
print 1 to 10 using for loop

print number

increment after print

print again
*/
function print1to10() {
    const output = document.getElementById("output");
    for (let i = 1; i <= 10; i++) {
        output.innerHTML += i + "<br>";
    }
    output.innerHTML += "End Loop" + "<br>";
}

//  Change it to print 1 to 20
for(let i = 1; i<=20; i++){
    console.log(i);
}

// Print 10 down to 1 (countdown)
for(let i = 10; i>=1; i--){
    console.log(i);
}

//  Print only even numbers from 1 to 20 
for (let i = 1; i<=20; i++){
   if(i % 2 === 0){ 
    console.log(i)
   }
}




//----------------------------------
/*
sum two number

solution
take two number from user

add two number

print result
*/

function sum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

//----------------------------------

function isEven() {
    const num = parseInt(document.getElementById("num").value);
    const output3 = document.getElementById("output3");
    
    if (num % 2 === 0) {
        output3.innerHTML = `${num} is even number.`;
    }
    else {
        output3.innerHTML = `${num} is odd number.`;
    }
}
document.getElementById("check").addEventListener("click", isEven);


//----------------------------------
/* minutes to second converter

solution
take minutes from user

multiply minutes by 60

print
*/
function secondsConverter() {
    const minutes = parseFloat(document.getElementById("minutes").value);
    const seconds = minutes * 60;
    document.getElementById("seconds").innerHTML = `Seconds: ${seconds}`;
}

//----------------------------------

/* get first element of the array*/

function getFirstElement() {
    const arr = [1, 2, 3, 4, 5];
    const firstElement = arr[0];
    document.getElementById("firstElement").innerHTML = `First Element: ${firstElement}`;
}