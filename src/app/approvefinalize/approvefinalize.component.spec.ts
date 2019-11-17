import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovefinalizeComponent } from './approvefinalize.component';

describe('ApprovefinalizeComponent', () => {
  let component: ApprovefinalizeComponent;
  let fixture: ComponentFixture<ApprovefinalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovefinalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovefinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
