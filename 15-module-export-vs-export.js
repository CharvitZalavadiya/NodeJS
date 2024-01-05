const obj1 = {          // const --> module.exports
    name: "Bruce Wayne"
}

let obj2 = obj1         // let --> exports
obj2 = {
    name: "Clark Kent"
}

console.log(obj1)