const math = require('mathjs');

function conjugateGradient(A, b, x = null, tol = 1e-10, maxIter = 1000) {
    const n = b.length;
    if (!x) x = math.zeros(n)._data;
    let r = math.subtract(b, math.multiply(A, x));
    let p = [...r];
    let rsold = math.dot(r, r);

    for (let i = 0; i < maxIter; i++) {
        let Ap = math.multiply(A, p);
        let alpha = rsold / math.dot(p, Ap);
        x = math.add(x, math.multiply(alpha, p));
        r = math.subtract(r, math.multiply(alpha, Ap));

        let rsnew = math.dot(r, r);
        if (Math.sqrt(rsnew) < tol) break;

        p = math.add(r, math.multiply(rsnew / rsold, p));
        rsold = rsnew;
        console.table(x)
        console.table(Ap)
        console.table(alpha)

        console.table(r)
        console.table(rsnew)
        console.table(p)
    }

    return x;
}

const A = [[5, 2, 0, 0], [2, 5, 2, 0], [0, 2, 5, 2], [0, 0, 2, 5]];
const b = [12, 17, 14, 7];
console.log("Solution x:", conjugateGradient(A, b));
