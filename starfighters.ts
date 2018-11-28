import { Spacecraft, Containership } from "./base-ships";

export class MilleniumFalcon extends Spacecraft implements Containership {
    
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