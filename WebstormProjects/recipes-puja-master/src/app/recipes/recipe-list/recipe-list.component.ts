import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('A Test Recipe', 'This is just a test', 'https://www.happyfoodstube.com/wp-content/uploads/2018/08/raspberry-oreo-no-bake-dessert-picture.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
