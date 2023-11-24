import { Component, OnInit } from '@angular/core';

import { noteMock } from 'src/app/shared/mocks/note.mock';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css'],
})
export class CreateNotesComponent implements OnInit {
  public pensamento = noteMock;

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Criado pensamento');
  }
}
