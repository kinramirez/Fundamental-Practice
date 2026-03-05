const calculate = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = operator(document.getElementById('operator').value);
    const operate = (operator) => {
        switch (operator) {
            case '+':
                return num1 + num2;
            
            case '-':
                return num1 - num2;
                
            case '*':
                return num1 * num2;
            
            case '/':
                return num1 / num2;
        }    
    const display = document.getElementById('display');
    document.getElementById('result').innerText = `Result: ${result}`;
    console.log(result)
    console.log(display)
}};