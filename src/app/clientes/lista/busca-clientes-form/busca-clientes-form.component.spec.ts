import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaClientesFormComponent } from './busca-clientes-form.component';

describe('BuscaClientesFormComponent', () => {
  let component: BuscaClientesFormComponent;
  let fixture: ComponentFixture<BuscaClientesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaClientesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaClientesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
