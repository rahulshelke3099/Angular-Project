import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { RecipesComponent } from './recipes/recipes.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecepieDetailsComponent } from './recipes/recepie-details/recepie-details.component';
// import { RecepiesStartComponent } from './recipes/recepies-start/recepies-start.component';
// import { RecepieEditComponent } from './recipes/recepie-edit/recepie-edit.component';
// import { RecepieResolverService } from './recipes/recepies-resolver.service';
// import { AuthComponent } from './auth/auth.component';
// import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
 
  {path:'', redirectTo:'/recepies' , pathMatch:'full'},
  // {path:'recepies',loadChildren:'./recipes/recepies.module#RecepiesModule'},
  // {path:'shopping-list',loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule'},
  // {path:'auth',loadChildren:'./auth/auth.module#AuthModule'},
  {path:'recepies',loadChildren:()=>import('./recipes/recepies.module').then(m=>m.RecepiesModule)},
  {path:'shopping-list',loadChildren:()=>import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)},
  {path:'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
