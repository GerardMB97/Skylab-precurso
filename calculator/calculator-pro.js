
let resultsHistory = []
function calculator() {

    let numbers = Array.from(arguments);
    let results = [];
    
    if (validateNumbers(numbers)) {
        if (numbers.length === 1) {
            return squareRoot(numbers);
        } else {

            results.push(
                sum(numbers),
                subtraction(numbers),
                multiplication(numbers),
                division(numbers)
            );

            resultsHistory.push(results)
            return results.join("\n");
        }
    } else {
        return 'Invalid input, select valid numbers'
    }

}

// Llamar esta funcion en cualquier momento para ver los resultados de las operaciones realizadas hasta el momento.
function showHisotry() {
    return resultsHistory.join("\n");
}

function sum(numbers) {

    let result = 0;
    for (number in numbers) {

        result += numbers[number];
    }

    result = fixDecimalsIfNeeded(result);

    return `sum: ${result}`;
}

function subtraction(numbers) {

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {

        result -= numbers[i];
    }

    result = fixDecimalsIfNeeded(result);

    return `subtraction: ${result}`;
}

function multiplication(numbers) {

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {

        result *= numbers[i];
    }

    result = fixDecimalsIfNeeded(result);

    return `multiplication: ${result}`;
}

function division(numbers) {

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {

        result /= numbers[i];
    }

    result = fixDecimalsIfNeeded(result);

    return `division: ${result}`;
}

function squareRoot(number) {
    let result = Math.sqrt(number);
    result = fixDecimalsIfNeeded(result);
    return `square root: ${result}`;
}

function validateNumbers(numbers) {
    return (numbers.some(a => isNaN(a)) || numbers.length === 0)? false : true;
}

function fixDecimalsIfNeeded(number) {

   return (Number.isInteger(number))? number : number.toFixed(3);
}
