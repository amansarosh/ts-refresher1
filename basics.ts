// numbers -- 1, 5.3, -10 all numbers, no differentation between integers and floats
// string 'hi, "hi", `hi` all text values
// boolean true, false 
// object {age: 30} 
// array [1,2,3] any js array is supported
// tuple [1,2] Added by TypeScript: Fixed length array
//Enum // enum {NEW, OLD} Added by TypeScript: Automatically enumerated global constant identifiers
// any is basically anything but you do want to avoid this

// if (typeof n1 === 'number' && typeof n2 === 'number') {   }
//return n1 + n2


function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1+ n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5; //5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is ';

const result = add(number1, number2, printResult, resultPhrase);