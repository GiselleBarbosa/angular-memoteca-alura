import { Component, OnInit } from '@angular/core';

import { pensamento } from 'src/app/shared/pensamento';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css'],
})
export class CreateNotesComponent implements OnInit {
  public pensamento = pensamento;

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Criado pensamento');
  }

}
