// ----- It’s important to create dynamic and reusable code. ----- //

type details = {
    name:string,
    subject:string,
    marks:number,
    school:string
}

let student:details = {
    name:"Rahul Joshi",
    subject:"English",
    marks:70,
    school:"Saraswati Vidya Mandir"
}

let student1:details = {
    name:"Aditya",
    subject:"Architect",
    marks:75,
    school:"DAV"
}

let student2:details= {
    name:"Aman",
    subject:"Computer Science",
    marks:80,
    school:"DPS"
}

console.log(student.name);
console.log(student1.name);
console.log(student2.name);

type productType={
    name:string,
    quantity:number,
    amount:number
}

// ---- Created one Aliase and function to find out the total price ---- //
const product:productType = {
    name:"Cricket Bat",
    quantity:5,
    amount:3500
}

const calculateTotalPrice = (product:productType) => {
    return `Product total price is ${product.quantity * product.amount}`;
}

let totalAmount = calculateTotalPrice(product);
console.log(totalAmount);