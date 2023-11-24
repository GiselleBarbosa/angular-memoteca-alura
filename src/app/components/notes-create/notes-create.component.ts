import { Component, OnInit } from '@angular/core';

import { pensamento } from 'src/app/shared/pensamento';

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css'],
})
export class NotesCreateComponent implements OnInit {
  public pensamento = pensamento;

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Criado pensamento');
  }

  cancelar() {
    alert('Cancelou');
  }
}
