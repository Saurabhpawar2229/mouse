import { Directive } from '@angular/core';
import { ElementRef,HostListener } from '@angular/core';
@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {
  
  
  constructor(private ele:ElementRef) 
  { 
    
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.fun('green');
  }

  
  private fun(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

  
  

}
