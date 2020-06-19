import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {
  showState: boolean = false;

  @Input('appHide') set inputLength(condition: number) {
    if (condition) {
      if (this.showState) return;
      this.showState = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.showState = false;
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
}
