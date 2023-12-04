import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.types';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() selectedRecipeEventFromList = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    {
      name: 'Biriyani',
      description: 'Aromatic Authentic Biriyani',
      imagePath:
        'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    },
    {
      name: 'Biriyani',
      description: 'Aromatic Authentic Biriyani',
      imagePath:
        'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    },
  ];

  handleSelectedRecipeFromList(recipe: Recipe) {
    this.selectedRecipeEventFromList.emit(recipe);
  }
}
