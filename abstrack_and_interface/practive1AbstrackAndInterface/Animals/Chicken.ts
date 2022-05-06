import {Animal} from "../AbstractClass/Animal";
import {Edible} from "../InterfaceClass/Edible";
export class Chicken extends Animal implements Edible{
    makeSound(): string {
        return "chicken: cluck-cluck";
    }
    howToEat(): string {
        return "could be fried"
    }
}