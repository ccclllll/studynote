import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Css3PropertyComponent } from './css3-property.component';

describe('Css3PropertyComponent', () => {
  let component: Css3PropertyComponent;
  let fixture: ComponentFixture<Css3PropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css3PropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Css3PropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
