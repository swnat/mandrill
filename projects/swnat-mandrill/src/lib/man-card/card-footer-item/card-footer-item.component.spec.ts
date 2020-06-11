import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterItemComponent } from './card-footer-item.component';

describe('CardFooterItemComponent', () => {
  let component: CardFooterItemComponent;
  let fixture: ComponentFixture<CardFooterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFooterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFooterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
