class Container {
    static of (value) {
        return new Container(value)
    }
    constructor (value){
        this.value = value
    }
    map (fn) {
        return Container.of(fn(this.value))
    }
}

class Maybe {
    static of (x) {
        return new Maybe(x)
    }
    isNothing () {
        return this.value === null || this.value === undefined
    }
    constructor (x){
        this.value = x
    }
    map (fn) {
        return this.isNothing ? this : Maybe.of(fn(this.value))
    }
}
moudule.exports = {
    Maybe,
    Container
}