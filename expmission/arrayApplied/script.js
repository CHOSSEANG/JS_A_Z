let userArray = [];

userArray.push({name:"John",age:18});
userArray.push({name:"Thomas",age:30});
userArray.push({name:"Neo",age:20});

function findAllArray(){
    userArray.forEach((user)=>{
        console.log(user);
    })
}

console.log('findAllArray');
findAllArray();

