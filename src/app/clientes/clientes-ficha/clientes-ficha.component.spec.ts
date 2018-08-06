import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesFichaComponent } from './clientes-ficha.component';


describe('ClientesFichaComponent', () => {
  let component: ClientesFichaComponent;
  let fixture: ComponentFixture<ClientesFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
