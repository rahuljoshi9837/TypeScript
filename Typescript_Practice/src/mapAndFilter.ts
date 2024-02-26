let arr:number[] = [10, 20, 30, 40, 50];
let arrAfterMap = arr.map((elemnt:number) => {
    return elemnt*2;
});
console.log(arrAfterMap);

let filArr:number[] = [10, 30, 60, 120, 240, 480];
let filterArr:number[] = filArr.filter((element) => element > 100);
console.log(filterArr);

let NewArr:number[] = [100, 200, 300, 400, 500, 600, 700];
let filteredArr:number[] = [];
NewArr.map((elem:number) => {
    if(elem>200){
        filteredArr.push(elem);
    }
});
console.log(filteredArr);

// ---- Return the array whose length is greater then 4 ---- //
let arr1:string[] = ["Rahul", "Aditya", "Yash", "Anil", "Aman", "Hridesh", "Unknown"];
let lengthGreaterThatFour:string[] = [];
let newArr=arr1.map((newStr:string) => {
    if(newStr.length > 4){
        lengthGreaterThatFour.push(newStr);
    }
});
console.log(lengthGreaterThatFour);

// ---- Return an element from an array whose first element is A ---- //
let arr2:string[] = ["Rahul", "Aditya", "Yash", "Anil", "Aman", "Hridesh", "Unknown"];
let matchingStr:string = "A";
let matchingArr:string[] = [];
for(let i=0; i<arr2.length; i++){
    if(arr2[i].charAt(0) === matchingStr){
        matchingArr.push(arr2[i]);
    }
}
console.log(matchingArr);

// ----- Return the string from an array ----- //
let arr3:(number | string)[] = [10,20,30,"Rahul","Aditya","Yash",40,50];
let stringArr:string[] = [];
arr3.map((el) => {
    if(typeof el == "string"){
        stringArr.push(el);
    }
});
console.log(stringArr);