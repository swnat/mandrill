import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MAN_IMAGE_SIZES, MAN_IMAGE_RATIOS } from './man-image.attributes';

@Component({
  selector: 'man-image',
  template: `
  <figure class="image">
    <img [class.is-rounded]="shape === 'rounded'" [src]="image">
  </figure>`,
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: string;
  @Input() size: string;
  @Input() ratio: string;
  @Input() shape: string;

  constructor(
    // tslint:disable-next-line:variable-name
    private _el: ElementRef,
    // tslint:disable-next-line:variable-name
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const figure = this._el.nativeElement.children[0];

    if (this.size) {
      for (const item of MAN_IMAGE_SIZES) {
        if (item === this.size) {
          this._renderer.addClass(figure, `is-${item}`);
        }
      }
    }

    if (this.ratio) {
      for (const item of MAN_IMAGE_RATIOS) {
        if (item === this.ratio) {
          this._renderer.addClass(figure, `is-${item}`);
        }
      }
    }

  }

}
