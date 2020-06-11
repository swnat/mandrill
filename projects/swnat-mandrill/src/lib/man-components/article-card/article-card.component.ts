import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'man-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @HostBinding('class') classes = 'column is-one-third-desktop is-half-tablet';

  @Input()
  title = '';
  @Input()
  description = '';
  @Input()
  id = 0;
  @Input()
  category = '';
  @Input()
  image = '';
  @Input()
  from = '';
  @Input()
  routeUrl = '';

  constructor() { }

  ngOnInit() {
  }

}
