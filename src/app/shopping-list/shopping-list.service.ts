import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apple',1),
        new Ingredient('pear',2)
      ];

    getIngredient(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}