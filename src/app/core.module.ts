import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecepieService } from './shared/recepie.service';
import { ShoppingService } from './shared/shopping.service';


@NgModule({
    
    providers:[ShoppingService,RecepieService,
        {   
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true}]
})
export class CoreModule
{

}