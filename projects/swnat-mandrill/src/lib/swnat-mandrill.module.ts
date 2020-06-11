import { NgModule } from '@angular/core';
import { SwnatMandrillComponent } from './swnat-mandrill.component';
import { ManCardModule } from './man-card/man-card.module';
import { ManImageModule } from './man-image/man-image.module';
import { ManContentModule } from './man-content/man-content.module';
import { ManComponentsModule } from './man-components/man-components.module';

@NgModule({
  declarations: [SwnatMandrillComponent],
  imports: [
    ManCardModule,
    ManImageModule,
    ManContentModule,
  ],
  exports: [
    SwnatMandrillComponent,
    ManCardModule,
    ManImageModule,
    ManContentModule,
    ManComponentsModule,
  ]
})
export class SwnatMandrillModule { }
