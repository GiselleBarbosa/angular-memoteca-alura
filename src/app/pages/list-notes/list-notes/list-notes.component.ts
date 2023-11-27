import { Component, OnInit } from '@angular/core';

import { NotesService } from './../../../core/services/notes.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  public notes$ = this.notesService.notes$;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getNotes();
  }

  public deleteNote(noteId: number): void {
    this.notesService
      .deleteNote(noteId)
      .pipe(take(1))
      .subscribe(() => this.notesService.getNotes());
  }
}
