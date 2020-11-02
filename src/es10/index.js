let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());
console.log(array.flat(1));
console.log(array.flat(2));


let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value *2]));

let hello = '       Hello world';

console.log(hello);
console.log(hello.trimStart());

let hello2 = 'Hello world           ';
console.log(hello2);
console.log(hello2.trimEnd());

try {
    
} catch {
    error
}


//{ name: 'Oscar', age: 32 }
//Transforma de objeto a array
let entries = [["name","Oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));

//symbols
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);