import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.types';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  handleAddToShopping() {
    this.recipeService.addRecipeIngredientsToShoppingList(
      this.recipe.ingredients
    );
  }
}
