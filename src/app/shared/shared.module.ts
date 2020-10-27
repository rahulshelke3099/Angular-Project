import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';

@NgModule({
    declarations:[
        AlertComponent,
        PlaceHolderDirective,
        LoadingSpinnerComponent,
        DropdownDirective
    ],
    imports:[CommonModule],
    exports:[AlertComponent,
        PlaceHolderDirective,
        LoadingSpinnerComponent,
        DropdownDirective,CommonModule],
    entryComponents:[AlertComponent]
})
export class SharedModule
{

}