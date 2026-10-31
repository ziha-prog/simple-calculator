//function


//1. declaration
/*
function name(parameter){
  code block;
}
*/
function sayHello(){
  return "Hello world";
}
console.log(sayHello())
//manggil function haurs pakai kurung

function sapaNama(name){
  return "My Name is " + name;
}
console.log(sapaNama("ziha"));
console.log(sapaNama("cat"));
//menghitung luas persegi panjang menggunakan function
//luas = panjang * lebar
function persegiPanjang(panjang, lebar){
  let luas = panjang * lebar;
  return "Luas persegi panjang adalah " + luas;  
}
console.log(persegiPanjang(50, 30));

//menghitung luas segitiga dengan menggunakan function 
// luas = 1/2 * alas * tinggi
function segitiga(alas, tinggi){
  let Luas = 1/2 * alas * tinggi;
  return "Luas segitiga adalah " + Luas;
}
console.log(segitiga(20, 15)); 

//konversi suhu dari fahrenheit menjadi celcius menggunakan function
// C = (5/9) * (f-32);
function suhu(f){
  let celcius = (5/9) * (f-32);
  return f + " °F = " + celcius + "°C";
}
console.log(suhu(20));

//2. function expression
// const var= function(){
// return "value"
//}
//console.log(var());
const hello = function(){
  return "HELLO WORLD"
}
console.log(hello());

const Name = function(){
  return "Zihaa"
}
console.log(Name());

const rectangle = function(panjang, lebar){
  let luass = panjang * lebar;
  return "Luas persegi panjang adalah " + luass;  
}
console.log(rectangle(50, 30));

const triangle = function(a, t){
  let area = 1/2 * a * t;
  return "The area of the triangle is " + area;
}
console.log(triangle(10, 25));

const temperature = function(fahrenheit){
  let formula = (5/9) * (fahrenheit - 32);
  return fahrenheit + " °F = " + formula + "°C"
}
console.log(temperature(20))

//Function arrow: tidak bisa 2 kali semicolon 
// const var = (paramter) => value + parameter;
//console.log
const rectangle2 = (panjang, lebar) => "the area of the rectangle is " + panjang * lebar;
console.log(rectangle2(10, 20));

const sayHi = () => "Hellow wolrd";
console.log(sayHi());

const greeting= () => "Ziha";
console.log(greeting());

const triangle2 = (a, t) => "the area of the triangle is " + 1/2 * a * t;
console.log(triangle2(20, 10));

const temperatures = (fahrenheit) => fahrenheit + " °F = " + (5/9) * (fahrenheit - 32) + "°C";
console.log(temperatures(20));