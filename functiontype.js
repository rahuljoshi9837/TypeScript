"use strict";
function palindrom(str) {
    let reverse = str.split("").reverse().join("");
    return reverse === str;
}
console.log(palindrom("12321"));
