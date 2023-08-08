import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfRecipiesComponent } from './types-of-recipies.component';

describe('TypesOfRecipiesComponent', () => {
  let component: TypesOfRecipiesComponent;
  let fixture: ComponentFixture<TypesOfRecipiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesOfRecipiesComponent]
    });
    fixture = TestBed.createComponent(TypesOfRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
