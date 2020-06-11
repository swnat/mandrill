import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'man-card-image',
  template: `<ng-content></ng-content>`
})
export class CardImageComponent {
  @HostBinding('class.card-image') isCardImage = true;
}
