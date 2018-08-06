import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesBuscaComponent } from './clientes-busca.component';


describe('BuscaClientesFormComponent', () => {
  let component: ClientesBuscaComponent;
  let fixture: ComponentFixture<ClientesBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
