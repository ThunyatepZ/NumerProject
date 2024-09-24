const math = require('mathjs')
let x = [0, 20000, 40000, 60000, 80000]
let y = [9.81, 9.7487, 9.6879, 9.6879, 9.5682]
let wannafind = 42000
let temp = 1;
let tempdown = 1;
let anser = [5]
let ansersum = 0;
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
        if (j == i) {

        }
        else {
            temp = temp * (x[j] - wannafind)
        }

    }
    for (let j = 0; j < x.length; j++) {
        if (j == i) {

        } else {
            tempdown = tempdown * (x[j] - x[i])
        }
    }

    anser[i] = ((temp / tempdown) * y[i])
    ansersum += ((temp / tempdown) * y[i])

    tempdown = 1;
    temp = 1

}
console.log(anser)
console.log(ansersum)