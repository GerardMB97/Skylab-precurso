function calculator(num1, num2){
    
    var results = [];
    
    if(validateNumbers(num1, num2)){
        if(num2 === undefined){
            return squareRoot(num1);
        }else{

    results.push(
        sum(num1, num2),
        subtraction(num1, num2),
        multiplication(num1, num2),
        division(num1, num2)
    );

    return results.join("\n");
        }
    }else{
        return 'Invalid input, select valid numbers'
    }
}

function sum(num1, num2){

    let result = num1 + num2;
    result = fixDecimalsIfNeeded(result);

    return `sum: ${result}`;
}

function subtraction(num1, num2){

    let result = num1 - num2;
    result = fixDecimalsIfNeeded(result);

    return `subtraction: ${result}`;
}

function multiplication(num1, num2){

    let result = num1 * num2;
    result = fixDecimalsIfNeeded(result);

    return `multiplication: ${result}`;
}

function division(num1, num2){

    let result = num1 / num2;
    result = fixDecimalsIfNeeded(result);

    return `division: ${result}`;
}

function squareRoot(num1){
    let result = Math.sqrt(num1);
    result = fixDecimalsIfNeeded(result);
    return `square root: ${result}`;
}

function validateNumbers(num1, num2){

    if(!isNaN(num1) && num2 === undefined){

        return true;

    }else if(!isNaN(num1) && !isNaN(num2)){

        return true;

    }else{

        return false;
    }
}

function fixDecimalsIfNeeded(number){

    if(Number.isInteger(number)){

        return number;

    }else{

        return number.toFixed(3);
    }
}