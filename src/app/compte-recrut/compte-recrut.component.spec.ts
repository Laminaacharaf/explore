import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteRecrutComponent } from './compte-recrut.component';

describe('CompteRecrutComponent', () => {
  let component: CompteRecrutComponent;
  let fixture: ComponentFixture<CompteRecrutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteRecrutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteRecrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
