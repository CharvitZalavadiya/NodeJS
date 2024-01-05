// direct exporting
// module.exports = (a, b) => {
//     return a+b;
// }

// exporting object
const add = (a, b) => {
    return a+b;
}
const sub = (a, b) => {
    return a-b;
}
module.exports = {
    add, sub
}