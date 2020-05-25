import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appdropdown1]'
})
export class DropdownDirective {

   constructor()
   {
     console.log("vvvf");
   }


  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);

  }
}