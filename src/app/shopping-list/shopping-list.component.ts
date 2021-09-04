import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredient(); 
  }

  onNewIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.slService.ingredientsChanged.subscribe(
      (changedIngredients: Ingredient[]) => {
        this.ingredients = changedIngredients;
      }
    )
  }

}
