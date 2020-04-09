function numberComparison(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        let result = 'first number is greater than second number';
        console.log(result);
        return result;
    } else if(secondNumber > firstNumber) {
        let result = 'second number is greater than first number';
        console.log(result);
        return result;
    } else {
        let result = 'the numbers are the same';
        console.log(result);
        return result;
    };
};