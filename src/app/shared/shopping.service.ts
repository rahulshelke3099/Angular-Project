import { Ingredient } from './ingredient.model';
import {Subject} from 'rxjs';
export class ShoppingService
{
   

    ingredientsChanged=new Subject<Ingredient[]>();
    startEditing=new Subject<number>();

    ingredients:Ingredient[]=[
        new Ingredient('Apple',50),
        new Ingredient('Tomatoes',101),
      ];

      getIngredients()
      {
          return this.ingredients.slice();
      }
      onIngredientsadded(ingredient:Ingredient)
      {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    
      addIngredients(ingredient:Ingredient[])
      {
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      getIngredient(index:number)
      {
          return this.ingredients[index];
      }
      updateIngredient(index:number,newIngredient:Ingredient)
      {
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }
     
      deleteIngredient(index:number)
      {
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
       
      }

   
}
