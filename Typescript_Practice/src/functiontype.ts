function palindrom(str:string):boolean{
    let reverse = str.split("").reverse().join("");
    return reverse===str;
}
console.log(palindrom("12321"));