import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
export class RecipeService{
   selectedRecipe = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a test Recipe', 'https://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-395x500.jpg'),
        new Recipe('Second test recipe', 'This is second test recipe', 'https://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-395x500.jpg')
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }

}