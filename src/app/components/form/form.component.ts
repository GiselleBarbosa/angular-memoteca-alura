import { Component, OnInit } from '@angular/core';

import { pensamento } from 'src/app/shared/pensamento';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public pensamento = pensamento;

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Criado pensamento');
  }

  cancelar(){
    alert('Cancelou')
  }
}
