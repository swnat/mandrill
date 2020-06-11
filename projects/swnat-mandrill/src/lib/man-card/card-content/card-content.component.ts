import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'man-card-content',
  template: `
  <div class="card-content">
    <ng-content></ng-content>
  </div>`
})
export class CardContentComponent { }
