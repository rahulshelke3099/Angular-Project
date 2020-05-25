import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Recepie } from './recepie-list/recepie.model';
import { RecepieService } from '../shared/recepie.service';



@Injectable({providedIn:'root'})
export class RecepieResolverService implements Resolve<Recepie[]>
{
 constructor(private datastorageservice:DataStorageService,private recepieservice:RecepieService) {}
  
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
    {
        const recepies=this.recepieservice.getrecepies();
        if(recepies.length===0)
        {
         this.datastorageservice.fetchRecepie();
        }
        else{

        }
        return recepies;
    }
    

 }

