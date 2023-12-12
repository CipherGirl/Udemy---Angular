import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('ingredientName') ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  handleIndgredientToAdd() {
    const ingredient = new Ingredient(
      this.ingredientNameInput.nativeElement.value,
      this.ingredientAmountInput.nativeElement.valueAsNumber
    );
    this.shoppingListService.addToIngredientList(ingredient);
  }
}
