import { Component, OnInit } from '@angular/core';

import { NotesModel } from 'src/app/core/model/notes-model';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css'],
})
export class CreateNotesComponent implements OnInit {
  public note!: NotesModel;

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Criado pensamento');
  }
}
