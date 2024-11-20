import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentTableComponent } from './environment-table.component';

describe('EnvironmentTableComponent', () => {
  let component: EnvironmentTableComponent;
  let fixture: ComponentFixture<EnvironmentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentTableComponent]
    });
    fixture = TestBed.createComponent(EnvironmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
