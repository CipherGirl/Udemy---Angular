import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.types';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
}
