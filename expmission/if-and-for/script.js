let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let resultArray = [];
// 첫번째 방법
console.log('첫번째 방법 : for문 + if문');
for(let i = 0; i < array.length; i++){
    if(array[i]%2==0){
        resultArray.push(array[i]);
    }
}
console.log('resultArray : ', resultArray);


// 두번째 방법
console.log('두번째 방법 : if문 + for of');
console.log('resultArray : ');
for(const num of resultArray){
    if(num%2 == 0){
        console.log(num);
    }
}
