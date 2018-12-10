import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimationDialogComponent } from './confimation-dialog.component';

describe('ConfimationDialogComponent', () => {
  let component: ConfimationDialogComponent;
  let fixture: ComponentFixture<ConfimationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfimationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
