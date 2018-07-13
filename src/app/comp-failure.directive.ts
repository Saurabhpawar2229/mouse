import { Directive } from '@angular/core';
import { ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele:ElementRef) 
  { 
    
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.fun("red");
  }
  
  private fun(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
