let userArray = [];

userArray.push({name:"John",age:10});
userArray.push({name:"Thomas",age:30});
userArray.push({name:"Neo",age:20});

function inputNameAge(){
    const name = prompt('이름을 입력하세요');
    const age = prompt('나이를 입력하세요');

    userArray.push({name:name,age:Number(age)});
}

function findAllArray(){
    userArray.forEach((user)=>{
        console.log(user);
    })
}

function ageAverage(){
    let value = 0;
    userArray.forEach((user)=>{
        value += user.age;
    })

    return value / userArray.length;
}

inputNameAge();
console.log('findAllArray');
findAllArray();
console.log('age Average')
console.log(ageAverage());

