import { Component, OnInit } from '@angular/core';
import { notesMock } from 'src/app/core/mocks/notes.mock';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  public notesList = notesMock;

  constructor() {}

  ngOnInit(): void {}
}
