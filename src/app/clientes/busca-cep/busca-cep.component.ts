import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss']
})
export class BuscaCepComponent implements OnInit {
  @Input() cliente: any;

  constructor() { }

  ngOnInit() {
  }

}
