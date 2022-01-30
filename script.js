const title = 266219;
let multiplying = 1,
    mass = (title.toString().split(""));


for (let i = 0; i < mass.length; i++) {
    multiplying = multiplying * mass[i];
}
console.log(multiplying);
let degree3 = multiplying ** 3;
console.log(String(degree3).slice(0,2));


