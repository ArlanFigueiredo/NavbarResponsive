import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContatoComponent } from './button-contato.component';

describe('ButtonContatoComponent', () => {
  let component: ButtonContatoComponent;
  let fixture: ComponentFixture<ButtonContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
