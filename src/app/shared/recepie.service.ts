import { Recepie } from '../recipes/recepie-list/recepie.model';
import { Ingredient } from './ingredient.model';
import { ShoppingService } from './shopping.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RecepieService
{
    recepiesChanged=new Subject<Recepie[]>();
    private recepies:Recepie[]=[];
    // private recepies:Recepie[]=[
    //     new Recepie('A Test Recepie',
    //     'This is simply a test',
    //     '../assets/images/recepie1.jpg'
    //     ,[
    //         new Ingredient('Meat',20),
    //         new Ingredient('French Fries',40)
    //     ]),
    //     new Recepie('A Test Recepie2'
    //     ,'This is simply a test2'
    //     ,'../assets/images/recepie2.jpg',[
    //         new Ingredient('Burger',4),
    //         new Ingredient('Rolls',5)
    //     ]),
    //   ];
    
   constructor(private shoppingservice:ShoppingService)
   {

   }

   setRecepies(recepies:Recepie[])
   {
       this.recepies=recepies;
       this.recepiesChanged.next(this.recepies.slice());
   }

   getrecepies()
   {
       return this.recepies.slice();
   }


   addIngredientsToshoppinglist(ingredient:Ingredient[])
   {
    this.shoppingservice.addIngredients(ingredient);
   }

   getRecepieByid(index:number)
   {
       return this.recepies[index];
   }

   addRecepie(recepie:Recepie)
   {
    this.recepies.push(recepie);
    this.recepiesChanged.next(this.recepies.slice())
   }
   updateRecepie(index:number,newRecepie:Recepie)
   {
       this.recepies[index]=newRecepie;
       this.recepiesChanged.next(this.recepies.slice());
   }
    
    deleteRecepie(index:number)
    {
        this.recepies.splice(index,1);
        this.recepiesChanged.next(this.recepies.slice());
    }
}