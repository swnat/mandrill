import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
// import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ArticleCardComponent],
  imports: [
    CommonModule,
    // RouterModule,
  ],
  exports: [
    ArticleCardComponent
  ]
})
export class ManComponentsModule { }
