import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from 'src/app/shared/recepie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit ,OnDestroy{
   
  
  recepies:Recepie[];
  subscription:Subscription;
  constructor(private recepieservice: RecepieService,private router:Router,
    private route:ActivatedRoute) {
    
  }
  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
  ngOnInit()

  {
  this.subscription=  this.recepieservice.recepiesChanged.subscribe((recepie1:Recepie[])=>{
     this.recepies=recepie1
    })
      this.recepies=this.recepieservice.getrecepies();
      
  }
  
  onNewRecepie()
  {
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
