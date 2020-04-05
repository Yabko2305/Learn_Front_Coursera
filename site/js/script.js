let a = Infinity;
let b = NaN;

let aInf = !isFinite(a);
let bInf = isNaN(b);
console.log(aInf);
console.log(bInf);