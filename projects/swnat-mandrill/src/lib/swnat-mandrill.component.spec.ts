import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwnatMandrillComponent } from './swnat-mandrill.component';

describe('SwnatMandrillComponent', () => {
  let component: SwnatMandrillComponent;
  let fixture: ComponentFixture<SwnatMandrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwnatMandrillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwnatMandrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
