import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.types';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      name: 'Biriyani',
      description: 'Aromatic Authentic Biriyani',
      imagePath:
        'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    },
    {
      name: 'Lamb Shank',
      description: 'Authentic Lamb Shank',
      imagePath:
        'https://www.billyparisi.com/wp-content/uploads/2022/04/lamb-shanks-featured.jpg',
    },
  ];

  getRecipe() {
    return this.recipes.slice();
  }

}
