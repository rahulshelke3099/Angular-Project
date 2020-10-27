import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {HeaderComponent} from './header/header.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecepieItemComponent } from './recipes/recepie-list/recepie-item/recepie-item.component';
// import {RecepieDetailsComponent} from './recipes/recepie-details/recepie-details.component';
// import {RecepieListComponent} from './recipes/recepie-list/recepie-list.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { DropdownDirective } from './shared/dropdown.directive';
// import { ShoppingService } from './shared/shopping.service';
// import { RecepiesStartComponent } from './recipes/recepies-start/recepies-start.component';
// import { RecepieEditComponent } from './recipes/recepie-edit/recepie-edit.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RecepieService } from './shared/recepie.service';
// import { AuthComponent } from './auth/auth.component';
// import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';
// import { AlertComponent } from './shared/alert/alert.component';
// import { PlaceHolderDirective } from './shared/placeholder/placeholder.directive';
// import { RecepiesModule } from './recipes/recepies.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
// import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
