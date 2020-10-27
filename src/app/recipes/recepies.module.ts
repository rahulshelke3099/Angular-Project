import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RecepieDetailsComponent } from './recepie-details/recepie-details.component';
import { RecepieEditComponent } from './recepie-edit/recepie-edit.component';
import { RecepieItemComponent } from './recepie-list/recepie-item/recepie-item.component';
import { RecepieListComponent } from './recepie-list/recepie-list.component';
import { RecepiesRoutingModule } from './recepies-routing.module';
import { RecepiesStartComponent } from './recepies-start/recepies-start.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
    declarations:[
    RecipesComponent,
    RecepieItemComponent,
    RecepieDetailsComponent,
    RecepieListComponent,
    RecepiesStartComponent,
    RecepieEditComponent,
    ], 
    imports:[RouterModule,ReactiveFormsModule,FormsModule,RecepiesRoutingModule,SharedModule,CommonModule],

    exports:[RecipesComponent,
        RecepieItemComponent,
        RecepieDetailsComponent,
        RecepieListComponent,
        RecepiesStartComponent,
        RecepieEditComponent,]
    
})
export class RecepiesModule
{

}