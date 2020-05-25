import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepieDetailsComponent } from './recipes/recepie-details/recepie-details.component';
import { RecepiesStartComponent } from './recipes/recepies-start/recepies-start.component';
import { RecepieEditComponent } from './recipes/recepie-edit/recepie-edit.component';
import { RecepieResolverService } from './recipes/recepies-resolver.service';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path:'recepies',component:RecipesComponent,
   children:[ 
     {path:'', component:RecepiesStartComponent},
     {path:'new',component:RecepieEditComponent},
     {path:':id',component:RecepieDetailsComponent,resolve:[RecepieResolverService]},
     {path:':id/edit',component:RecepieEditComponent,resolve:[RecepieResolverService]}
   ]
   },
  {path:'shopping-list' ,component:ShoppingListComponent},
  {path:'', redirectTo:'/recepies' , pathMatch:'full'},
  {path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
