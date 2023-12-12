import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.types';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  handleSelectedRecipeFromItem() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
