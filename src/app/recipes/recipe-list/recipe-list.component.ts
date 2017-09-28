import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Test Recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDceIDGwqE9L-zFO3Eawa19eyt_t_kWRU_IodW8rjOSpET3LlaBQ'),
    new Recipe('Recipe 2', 'Test Recipe 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDceIDGwqE9L-zFO3Eawa19eyt_t_kWRU_IodW8rjOSpET3LlaBQ'),
    new Recipe('Recipe 3', 'Test Recipe 3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDceIDGwqE9L-zFO3Eawa19eyt_t_kWRU_IodW8rjOSpET3LlaBQ')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
