import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDStyle]'
})
export class DStyleDirective {
  @Input() dirStyles: { fontSize: string, borderColor: string }

  @HostBinding('style.fontSize') fontSize: string;
  @HostBinding('style.borderColor') borderColor: string;

  constructor() { }

  @HostListener('mouseenter') enter() {
    this.fontSize = this.dirStyles.fontSize;
    this.borderColor = this.dirStyles.borderColor;
  }

  @HostListener('mouseleave') leave() {
    this.fontSize = '14px';
    this.borderColor = '#000';
  }
}
