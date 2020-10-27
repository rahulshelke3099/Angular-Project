import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RecepieDetailsComponent } from './recepie-details/recepie-details.component';
import { RecepieEditComponent } from './recepie-edit/recepie-edit.component';
import { RecepieResolverService } from './recepies-resolver.service';
import { RecepiesStartComponent } from './recepies-start/recepies-start.component';
import { RecipesComponent } from './recipes.component';

const routes:Routes=[
    {path:'',component:RecipesComponent,
  canActivate:[AuthGuard],
   children:[ 
     {path:'', component:RecepiesStartComponent},
     {path:'new',component:RecepieEditComponent},
     {path:':id',component:RecepieDetailsComponent,resolve:[RecepieResolverService]},
     {path:':id/edit',component:RecepieEditComponent,resolve:[RecepieResolverService]}
   ]
   },
]

@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RecepiesRoutingModule
{

}