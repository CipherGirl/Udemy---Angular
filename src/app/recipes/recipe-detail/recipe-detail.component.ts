import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Recipe } from '../recipe.types';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  handleAddToShopping() {
    this.recipeService.addRecipeIngredientsToShoppingList(
      this.recipe.ingredients
    );
  }
}