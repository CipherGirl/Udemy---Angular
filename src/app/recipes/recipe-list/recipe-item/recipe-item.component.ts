import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.types';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() selectedRecipeEventFromItem = new EventEmitter<void>();

  handleSelectedRecipeFromItem() {
    this.selectedRecipeEventFromItem.emit();
  }
}
