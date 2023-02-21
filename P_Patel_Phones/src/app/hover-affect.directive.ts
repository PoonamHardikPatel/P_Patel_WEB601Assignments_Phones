import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})

/*
export class HoverAffectDirective {

  constructor(private elm: ElementRef) {
    elm.nativeElement.style.backgroundColor = "green";
  }
}
*/

export class HoverAffectDirective {

  @HostBinding('style.textDecoration') textDecoration: string | undefined;
    
  /*
  @HostListener('mouseenter') onMouseEnter() {
    this.textDecoration = "underline";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textDecoration = "none";
  }
  */

  //-------------------------------------------------------------------------------

  @Input('appHoverAffect') hoverBoldStyle: string | undefined;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter()
  {
    if (this.hoverBoldStyle === 'underline')
    {
      this.el.nativeElement.style.textDecoration = 'underline';
    }
    else if (this.hoverBoldStyle === 'bold')
    {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    if (this.hoverBoldStyle === 'underline')
    {
      this.el.nativeElement.style.textDecoration = 'none';
    }
    else if (this.hoverBoldStyle === 'bold')
    {
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }
}
