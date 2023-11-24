import { Component, OnInit } from '@angular/core';

import { notesMock } from 'src/app/shared/mocks/notes.mock';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  public listNotes = notesMock;
  
  constructor() {}

  ngOnInit(): void {}
}
