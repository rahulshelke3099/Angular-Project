import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecepieService } from './recepie.service';
import { Recepie } from '../recipes/recepie-list/recepie.model';
import {map,tap, take, exhaustMap} from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn:'root'})
export class DataStorageService
{
 
    constructor(private http:HttpClient,private recepieservice:RecepieService,private authservice:AuthService)
    {

    }

    storedRecepie()
    {
       const recepies:Recepie[]=this.recepieservice.getrecepies();
       this.http.put('https://ng-complete-guide-1d438.firebaseio.com/recepies.json',recepies).subscribe
       (responseData=>{
           console.log(responseData);
       })
    }

    fetchRecepie()
    {
     
    return  this.http.get<Recepie[]>('https://ng-complete-guide-1d438.firebaseio.com/recepies.json')
    .pipe(map(recepies=>{
            return recepies.map(recepie=>{
                return {...recepie,ingredients:recepie.ingredients?recepie.ingredients:[]}});
        
        }),tap(recepies=>{
            this.recepieservice.setRecepies(recepies)}));
    }

}
// .
// pipe(map(recepies=>{

//     return recepies.map(recepie=>{
//         return {...recepie,ingredients:recepie.ingredients?recepie.ingredients:[]}});

// }),tap(recepies=>{
//     this.recepieservice.setRecepies(recepies)})).subscribe();

// }