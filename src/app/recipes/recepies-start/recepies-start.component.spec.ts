import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiesStartComponent } from './recepies-start.component';

describe('RecepiesStartComponent', () => {
  let component: RecepiesStartComponent;
  let fixture: ComponentFixture<RecepiesStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepiesStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepiesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
