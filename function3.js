function myString("Shower your blessings on me Lord") {
   const myStringlength = myString.length;
    if (mystringlength >= 5) {
        let result = 'This word is long';
        console.log(result);
        return result;
    } else if(myStringlength < 5) {
        let result = 'This word is short';
        console.log(result);
        return result;
    }
};