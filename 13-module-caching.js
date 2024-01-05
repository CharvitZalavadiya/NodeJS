class superHero{
    constructor (name){
        this.name = name;
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name;
    }
}

// module.exports = new superHero("batman")         // caching
module.exports = superHero          // no caching because we are exporting whole class and provides the values of getName and setName in index file