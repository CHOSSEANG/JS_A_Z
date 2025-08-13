let userArray = [];

userArray.push({name:"John",age:10});
userArray.push({name:"Thomas",age:30});
userArray.push({name:"Neo",age:20});

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

console.log('findAllArray');
findAllArray();
console.log(ageAverage());

