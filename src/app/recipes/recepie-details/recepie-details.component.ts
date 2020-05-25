import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie-list/recepie.model';
import { ShoppingService } from 'src/app/shared/shopping.service';
import { RecepieService } from 'src/app/shared/recepie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {

 recepie:Recepie;
 id:number;
  constructor(private recepieservice:RecepieService,private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe((params:Params)=>{
      this.id= +params['id'];
      this.recepie=this.recepieservice.getRecepieByid(this.id);
    })
  }

  sendIngredients()
  {
    this.recepieservice.addIngredientsToshoppinglist(this.recepie.ingredients);
   
  }
  onEditRecepie()
  {

    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  onDeleteRecepie(id:number)
  {
this.recepieservice.deleteRecepie(id);
this.router.navigate(['/recepies']);
  }

}
