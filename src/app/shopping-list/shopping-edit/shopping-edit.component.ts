import { Component, OnInit, EventEmitter,Output, OnDestroy, ViewChild} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

import { ShoppingService } from 'src/app/shared/shopping.service';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy {

 

name:string;
amount:number;

// @ViewChild('namedInput') namedInput:ElementRef;
// @ViewChild('amountInput') amountInput:ElementRef;
@ViewChild('f') slform:NgForm;
ingredient:Ingredient;
subscription:Subscription;
editMode=false;
editedItemIndex:number;
editedItem:Ingredient;

  constructor(private shoppingservice:ShoppingService) { }
  ngOnDestroy() {
   this.subscription.unsubscribe();
  }

  ngOnInit(): void {
   this.subscription= this.shoppingservice.startEditing.subscribe(
     (index:number)=>
     {this.editMode=true;
      this.editedItemIndex=index;
      this.editedItem=this.shoppingservice.getIngredient(index);
      this.slform.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    }
   );
  
  }

  onAddItem(form :NgForm)
{
  const value1=form.value;
const ingredient={name:value1.name,amount:value1.amount};
   if(this.editMode)
   {
     this.shoppingservice.updateIngredient(this.editedItemIndex,ingredient)
     
   }
   else{
  this.shoppingservice.onIngredientsadded(ingredient);
 
   }
  form.reset();
  this.editMode=false;
}

  onClear()
  {
    this.slform.reset();
    this.editMode=false;
  }

  onDelete()
  {
    this.shoppingservice.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
