import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardFooterItemComponent } from './card-footer-item/card-footer-item.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardHeaderIconComponent } from './card-header-icon/card-header-icon.component';
import { CardHeaderTitleComponent } from './card-header-title/card-header-title.component';
import { CardImageComponent } from './card-image/card-image.component';



@NgModule({
  declarations: [
    CardComponent,
    CardContentComponent,
    CardFooterComponent,
    CardFooterItemComponent,
    CardHeaderComponent,
    CardHeaderIconComponent,
    CardHeaderTitleComponent,
    CardImageComponent,
  ],
  imports: [],
  exports: [
    CardComponent,
    CardContentComponent,
    CardFooterComponent,
    CardFooterItemComponent,
    CardHeaderComponent,
    CardHeaderIconComponent,
    CardHeaderTitleComponent,
    CardImageComponent,
  ],
})
export class ManCardModule { }
