import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenGeneratorComponent } from './kitten-generator.component';

describe('KittenGeneratorComponent', () => {
  let component: KittenGeneratorComponent;
  let fixture: ComponentFixture<KittenGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
