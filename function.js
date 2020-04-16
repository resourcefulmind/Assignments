function numberComparison(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        let result = 'first number is greater than second number';
        return result;
    } else if(secondNumber > firstNumber) {
        let result = 'second number is greater than first number';
        return result;
    } else {
        let result = 'the numbers are the same';
        return result;
    };
};
numberComparison(firstNumber, secondNumber);
