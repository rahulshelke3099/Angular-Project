import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recepie
{
public name:string;
public description:string;
public imagepath:string;
public ingredients:Ingredient[];

constructor(name:string,description:string,imagepath:string, ingredients:Ingredient[])
{
this.name=name;
this.description=description;
this.imagepath=imagepath;
this.ingredients=ingredients;
}


}