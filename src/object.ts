const person : {
    name:string,
    Age:number,
    Profession:string,
    Address:{country:string, city:string}
}={
    "name" : "Rahul Joshi",
    "Age" : 24,
    "Profession" : "Developer",
    Address : {
        "country" : "India",
        "city" : "Gurugram"
    }
}

console.log(person.name);
console.log(person.Address.country);