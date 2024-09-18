let X = [0, 20000, 40000, 60000, 80000];
let Y = [9.81, 9.7487, 9.6879, 9.6879, 9.5682];
let x = 46321;
const Cn = (l, r) => {
    if (l - r == 1) {
        return (Y[l] - Y[r]) / (X[l] - X[r]);
    } else if (l == 0 && r == 0) {
        return Y[0];
    } else {
        return (Cn(l, r + 1) - Cn(l - 1, r)) / (X[l] - X[r]);
    }
}

let result = 0;
for (let i = 0; i < X.length; i++) {
    let sum = Cn(i, 0);
    for (let j = i; j > 0; j--) {
        sum *= x - X[j - 1];
    }
    result += sum;
}

console.log(result);
