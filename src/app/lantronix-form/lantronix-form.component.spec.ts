import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LantronixFormComponent } from './lantronix-form.component';

describe('LantronixFormComponent', () => {
  let component: LantronixFormComponent;
  let fixture: ComponentFixture<LantronixFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LantronixFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LantronixFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
