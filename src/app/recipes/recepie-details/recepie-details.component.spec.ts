import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieDetailsComponent } from './recepie-details.component';

describe('RecepieDetailsComponent', () => {
  let component: RecepieDetailsComponent;
  let fixture: ComponentFixture<RecepieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
