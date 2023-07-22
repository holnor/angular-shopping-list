import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This coul be a tasty food recipe, but now this is only a test text', 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg')
  ];
}
