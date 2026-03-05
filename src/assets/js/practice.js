let printNumber = function () {
    const output = document.getElementById("output");
    for (let i = 1; i <= 10; i++) {
        output.innerHTML += i + "<br>";
    }
    output.innerHTML += "End Loop";
}
printNumber();
/*
Problem: print number 1 to 10

solution
print 1 to 10 using for loop

print number

increment after print

print again
*/