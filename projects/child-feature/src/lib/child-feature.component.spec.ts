import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFeatureComponent } from './child-feature.component';

describe('ChildFeatureComponent', () => {
  let component: ChildFeatureComponent;
  let fixture: ComponentFixture<ChildFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
