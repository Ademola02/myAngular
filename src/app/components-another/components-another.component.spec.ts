import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAnotherComponent } from './components-another.component';

describe('ComponentsAnotherComponent', () => {
  let component: ComponentsAnotherComponent;
  let fixture: ComponentFixture<ComponentsAnotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsAnotherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
