import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styles:[]
})
export class HeaderComponent implements OnInit,OnDestroy
{
    private userSub:Subscription;
     isAuthenticated=false;

    constructor(private datastorageservice:DataStorageService,private authservice:AuthService)
    {
       
    }
  
    ngOnInit() 
    {
        this.userSub=this.authservice.user.subscribe(user=>
            {
                this.isAuthenticated=!!user;
                console.log(!user);
                console.log(!!user);
            });
    }

    onSaveData()
    {
        this.datastorageservice.storedRecepie();
    }

    onFetchData()
    {
        this.datastorageservice.fetchRecepie().subscribe();
    }


    ngOnDestroy() 
    {
        this.userSub.unsubscribe();
    }
    
    onLogout()
    {
        this.authservice.logout();
    }
}