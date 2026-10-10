export {};

let productName:string="Wireless Mouse";
let price:number=799.5;
let inStock:boolean=true;
let tags:string[]=["electronics","accessories"];
let productId:number|string="SKU-101";

function printProductInfo():void{
    console.log(`Product ${productId} costs Rs.${price},is ${inStock?"in stock":"out of stock"} and is tagged ${tags.join(",")}`);
}
printProductInfo();

let looseValue:any="hello";
let strictValue:string|number="hello";
// Safer because the compiler now rejects operations that are invalid for string | number, whereas `any` switches off type checking entirely.


//functions and scope
function calculateDiscount(price:number,discountPercent:number=10):number{
    return price-(price*discountPercent)/100;
}

function applyBulkDiscount(prices:number[],rate:number):number[]{
    return prices.map((p)=>p-(p*rate)/100);
}

console.log("Calculated Discount:",calculateDiscount(1000));//
console.log("Bulk discount applied:",applyBulkDiscount([100,200],20));

for (let i = 0; i < 3; i++) {
  const squared = i * i; // `i` and `squared` exist only inside this block
}
//console.log(i); // ERROR: Cannot find name 'i' (let is block-scoped)

function demoVar():void{
    for(var j=0;j<3;j++){}
    console.log(j);
}
demoVar();

//interfaces and objects

interface Product{
    id:number;
    name:string;
    price:number;
    inStock:boolean;
    tags?:string[];
}

const products:Product[]=[
{id:1,name:"Keyboard",price:1500,inStock:true,tags:["electronics","accessories"]},
{id:2,name:"USB Cable",price:250,inStock:false},
{id:3,name:"Monitor",price:9000,inStock:true,tags:["electronics","accessories"]},
{id:4,name:"Webcam",price:2200,inStock:false}
];

function getAvailableProducts(products:Product[]):Product[]{
    return products.filter((p)=>p.inStock);
}

interface DiscountedProduct extends Product{
    discountPercent:number;
}

function applyDiscountToProducts(products:Product[],percent:number=15):DiscountedProduct[]{
    return products.map((p)=>({
        ...p,
        price:p.price-(p.price*percent)/100,
        discountPercent:percent,
    }));
}

console.log("Available Product list:",getAvailableProducts(products));
console.log("Applied products discount:",applyDiscountToProducts(products));