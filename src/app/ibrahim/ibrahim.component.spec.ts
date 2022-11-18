import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ibrahimComponent } from './ibrahim.component';

describe('ibrahimComponent', () => {
  let component: ibrahimComponent;
  let fixture: ComponentFixture<ibrahimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ibrahimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ibrahimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
