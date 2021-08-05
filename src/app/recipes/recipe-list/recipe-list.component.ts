import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test Recipe', 'https://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-395x500.jpg'),
    new Recipe('Second test recipe', 'This is second test recipe', 'https://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-395x500.jpg')
  ];
  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
