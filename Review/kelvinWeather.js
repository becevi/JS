// We declare a const variable named kelvin and initialize it with value 293
const kelvin = 293;
// Declared const celsius, substracted 273 from kelvin
const celsius = kelvin - 273;
const farenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);