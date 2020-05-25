import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecepieService } from 'src/app/shared/recepie.service';
import { Recepie } from '../recepie-list/recepie.model';



@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {

  id:number;
  editMode=false;
  recepieForm:FormGroup;
  constructor(private route:ActivatedRoute,private recepieService:RecepieService ,
    private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>
    {
  this.id= +params['id'];
  this.editMode=params['id']!=null;
  this.initform()
    }
      )
  }

  onSubmit()
  {
   
    // const recepie=new Recepie(this.recepieForm.value['name'],this.recepieForm.value['description'],
    // this.recepieForm.value['imagePath'],this.recepieForm.value['ingredients'])

    // instead of above we cn also write directly this.recepieForm.value

     const recepie=new Recepie(this.recepieForm.value['name'],this.recepieForm.value['description'],
     this.recepieForm.value['imagePath'],this.recepieForm.value['ingredients'])
     if(this.editMode)
     {
      this.recepieService.updateRecepie(this.id,recepie);
     }
     else
     {
       
       this.recepieService.addRecepie(recepie);
     }
    
     this.onCancel()
   
  }

  private initform()
  {
   
    let recepieName="";
    let imagePath="";
    let recepieDescription=""
    let recepieIngrdients=new FormArray([]);

  
    if(this.editMode)
    {
      const recepie=this.recepieService.getRecepieByid(this.id);
      recepieName=recepie.name;
      imagePath=recepie.imagepath;
      recepieDescription=recepie.description;
      if(recepie['ingredients'])
      {
        for(let ingredient of recepie.ingredients)
        {
        recepieIngrdients.push(new FormGroup({
            'name':new FormControl(ingredient.name,Validators.required) ,
            'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    this.recepieForm=new FormGroup({
      'name':new FormControl(recepieName,Validators.required),
      'imagePath':new FormControl(imagePath,Validators.required),
      'description':new FormControl(recepieDescription,Validators.required),
      'ingredients':recepieIngrdients,

    })
   
  }

  get DynamicFormControls() {

    return <FormArray>this.recepieForm.get('ingredients');
  }

  onAddIngredient()
  {
    (<FormArray>this.recepieForm.get('ingredients')).push(
      
        new FormGroup({
          'name':new FormControl(null,Validators.required),
          'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
      
    )
  }
  onCancel()
  {
    this.router.navigate(['../'],{relativeTo:this.route})
    console.log("hii")
  }

  onDeleteIngredient(index:number)
  {
    (<FormArray>this.recepieForm.get('ingredients')).removeAt(index)
  }
 
}
