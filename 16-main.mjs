// normal and inline inporting
// import add from "./16-es-modules.mjs"
// console.log(add(4,8))


// object importing
// import math from "./16-es-modules.mjs"
// console.log(math.add(3,5))
// console.log(math.sub(3,5))


// object importing then destructuring and then using
// import math from "./16-es-modules.mjs"
// const {add, sub} = math
// console.log(add(3,5))
// console.log(sub(3,5))


// direct importing with *
// import * as math from "./16-es-modules.mjs"
// const {add, sub} = math
// console.log(add(3,5))
// console.log(sub(3,5))


// direct importing with objects
import {add, sub} from "./16-es-modules.mjs"
console.log(add(3,5))
console.log(sub(3,5))