const person = {
    name:"nagarro",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics"
}

for(var key in person){
    console.log(person[key]);
    console.log(key);
}