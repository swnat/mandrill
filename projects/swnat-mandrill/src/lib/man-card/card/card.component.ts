import { Component } from '@angular/core';

@Component({
  selector: 'man-card',
  template: `
  <div class="card">
    <ng-content></ng-content>
  </div>`
})
export class CardComponent { }
