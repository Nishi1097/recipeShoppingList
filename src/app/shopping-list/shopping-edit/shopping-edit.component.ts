import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameElement: ElementRef;
  @ViewChild('amountInput') amountElement: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>(); 
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddClick(){
    const ingName = this.nameElement.nativeElement.value;
    const ingAmount = this.amountElement.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
