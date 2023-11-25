import { Component, OnInit } from '@angular/core';

import { NotesModel } from 'src/app/core/model/notes-model';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  public notesList: NotesModel[] = [];

  constructor() {}

  ngOnInit(): void {}
}
