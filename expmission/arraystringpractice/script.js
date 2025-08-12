let numArray = [1,2,3,4,5,6,7,8,9,10];
let stringArray = ["a","b","c","d"];
let stringArray2 = ["e","f","g","h","i","j"];
let string = "helloWorld";

// number Array
console.log('numArray : ',numArray);
numArray.push(11);
console.log('numArray after push 11 : ',numArray);
numArray.pop();
console.log('numArray after pop : ', numArray);
console.log('numArray.filter(num) > 3)', numArray.filter((num) => num > 3));
console.log('numArray.some(num > 5)',numArray.some((num) => num > 5));
console.log('numArray.some(num >= 1)',numArray.every((num) => num >= 1));
console.log('numArray.every(num > 5)',numArray.every((num) => num > 5));
console.log('numArray.reduce((acculator, currentValue) => acculator +  currentValue)',numArray.reduce((acculator, currentValue) => acculator + currentValue));
console.log('numArray.map((num) => num * 2) ',numArray.map((num) => num * 2));
console.log('numARray.find(num > 5',numArray.find((num)=>num > 5));
const resultSlice = numArray.slice(0,4);
console.log('resultSlice after slice(0 , 4) the numArray  : ', resultSlice);



// string Array
console.log('stringArray : ',stringArray);
console.log('stringArray2 : ', stringArray2);
const resultConcat = stringArray.concat(stringArray2);
console.log(resultConcat);
console.log('stringArray.includes("b")',stringArray.includes("b"));


// string
console.log('string : ', string);
console.log('uppercase : ', string.toUpperCase());
console.log('substring(0,4) : ', string.substring(0,4));

