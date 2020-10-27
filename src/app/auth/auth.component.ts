import { Component, ComponentFactoryResolver, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {AlertComponent} from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
    

})
export class AuthComponent implements OnDestroy
{

    constructor(private authservice:AuthService,private router:Router,
        private componentFactoryResolver:ComponentFactoryResolver){}
    

    isLoginMode=true;
    isLoading=false;
    error:string=null;
   
    @ViewChild(PlaceHolderDirective) alertHost:PlaceHolderDirective
   
    private closeSubscription:Subscription

    ngOnDestroy(): void {
        
        if(this.closeSubscription)
        {
            this.closeSubscription.unsubscribe();
        }
    }

    onSwitchMode()
    {
        this.isLoginMode=!this.isLoginMode;
    }

    onSubmit(form:NgForm)
    {
        if(!form.valid)
        {
            return;
        }
        
        const email=form.value.email;
        const password=form.value.password;
        this.isLoading=true;
        let authObs:Observable<AuthResponseData>;
         

        if(this.isLoginMode)
        {      
            authObs= this.authservice.login(email,password);
        }
        else{
            authObs= this.authservice.onSignUp(email,password);
        }

        authObs.subscribe(
           
            resData=>{
                
                console.log(resData);
                this.isLoading=false;
                this.router.navigate(['./recepies'])
            },errorMessage=>{
                console.log(errorMessage);
                this.error=errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading=false;
               
            }
           );   
      
        form.reset();
    }

    onHandleError()
    {
        this.error=null;
    }

   private  showErrorAlert(message:string)
   {
  
   const alertComponent= this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
   const hostViewContainerRef=this.alertHost.viewContainerRef;
   hostViewContainerRef.clear();
   const componentRef=hostViewContainerRef.createComponent(alertComponent);
   componentRef.instance.message=message;
   this.closeSubscription=componentRef.instance.close.subscribe(()=>{

    this.closeSubscription.unsubscribe();
    hostViewContainerRef.clear();
   })
   }
}