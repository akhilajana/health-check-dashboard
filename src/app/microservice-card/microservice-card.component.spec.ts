import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroserviceCardComponent } from './microservice-card.component';

describe('MicroserviceCardComponent', () => {
  let component: MicroserviceCardComponent;
  let fixture: ComponentFixture<MicroserviceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroserviceCardComponent]
    });
    fixture = TestBed.createComponent(MicroserviceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
