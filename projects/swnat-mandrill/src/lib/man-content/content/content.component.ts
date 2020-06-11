import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MAN_CONTENT_SIZES } from './man-content.attributes';

@Component({
  selector: 'man-content',
  template: `
  <div class="content">
    <ng-content></ng-content>
  </div>`
})
export class ContentComponent implements OnInit {

  @Input() size: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {

    const content = this.el.nativeElement.children[0];

    if (this.size) {
      if (MAN_CONTENT_SIZES.some(attr => this.size === attr)) {
        this.renderer.addClass(content, `is-${this.size}`);
      }
    }

  }

}
