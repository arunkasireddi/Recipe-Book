import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Ingredient } from "./../shared/ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super-tasty schnitzel",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDceIDGwqE9L-zFO3Eawa19eyt_t_kWRU_IodW8rjOSpET3LlaBQ",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Big Fat Burger",
      "what else you uneed to say?",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDceIDGwqE9L-zFO3Eawa19eyt_t_kWRU_IodW8rjOSpET3LlaBQ",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
