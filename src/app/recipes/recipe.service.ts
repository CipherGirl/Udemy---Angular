import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.types';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      name: 'Biriyani',
      description: 'Aromatic Authentic Biriyani',
      imagePath:
        'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
      ingredients: [new Ingredient('Meat', 1), new Ingredient('Rice', 1)],
    },
    {
      name: 'Lamb Shank',
      description: 'Authentic Lamb Shank',
      imagePath:
        'https://www.billyparisi.com/wp-content/uploads/2022/04/lamb-shanks-featured.jpg',
      ingredients: [new Ingredient('Meat', 1), new Ingredient('Potatoes', 1)],
    },
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addRecipeIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
}
