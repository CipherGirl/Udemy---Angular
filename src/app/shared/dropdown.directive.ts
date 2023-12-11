import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.element.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
    const ulElement = this.element.nativeElement.querySelector('ul');
    if (ulElement) {
      if (this.isOpen) {
        this.renderer.removeAttribute(ulElement, 'hidden');
        this.renderer.addClass(ulElement, 'absolute');
      } else {
        this.renderer.setAttribute(ulElement, 'hidden', 'true');
        this.renderer.removeClass(ulElement, 'absolute');
      }
    }
  }
}
