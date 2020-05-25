import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shared/shopping.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 
})
export class ShoppingListComponent implements OnInit , OnDestroy {

 
  
  ingredients:Ingredient[];
   private igChangedSub:Subscription;
  constructor(private shoppingservice: ShoppingService) { 
    
  }
  ngOnDestroy(): void {
  this.igChangedSub.unsubscribe();
  }

  ngOnInit(): void {
    // this.ingredients.push(ingredient));
 
  //  console.log(this.ingredients);
     this.ingredients=this.shoppingservice.getIngredients();
   this.igChangedSub= this.shoppingservice.ingredientsChanged.subscribe((ingredients: Ingredient[])=>
    {this.ingredients=ingredients})
  }
  
  onEditItem(index:number)
  {

    this.shoppingservice.startEditing.next(index);
  }
 
}
