class Spacecraft {
    constructor (public propulsor: string)
    {

    }

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}


class MilleniumFalcon extends Spacecraft implements Containership {
    
    cargoContainer: number

    constructor() {
        super("hyperdrive")
        this.cargoContainer = 4
    }

    //sobrescrita do metodo
    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            //chama o metodo da classe pai
            super.jumpIntoHyperspace()
        }
        else {
            console.log('Failed to jump into hyperspace')
        }
    }
}

interface Containership {
    cargoContainer: number
}

let ship = new Spacecraft("hyperdrive")

ship.jumpIntoHyperspace();


let falcon = new MilleniumFalcon();

falcon.jumpIntoHyperspace();


let goodForTheJob = (ship: Containership ) => ship.cargoContainer > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no' }`)

