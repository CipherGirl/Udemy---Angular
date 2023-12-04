import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('ingredientName') ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmountInput: ElementRef;
  @Output() indgredientToAdd = new EventEmitter<{
    name: string;
    amount: number;
  }>();

  handleIndgredientToAdd() {
    const ingredient = new Ingredient(
      this.ingredientNameInput.nativeElement.value,
      this.ingredientAmountInput.nativeElement.valueAsNumber
    );
    this.indgredientToAdd.emit(ingredient);
  }
}
