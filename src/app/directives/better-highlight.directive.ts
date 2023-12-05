import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }

  constructor() {}

  ngOnInit(): void {}
}
