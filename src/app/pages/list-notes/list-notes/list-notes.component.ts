import { Component, OnInit } from '@angular/core';

import { NotesService } from '@services/notes.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  public notes$ = this.notesService.notes$;
  public showDialog = false;

  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit(): void {
    this.notesService.getNotes();
  }

  public redirectToEditNote(id: number) {
    this.router.navigate([`edit-notes/${id}`]);
  }

  public deleteNote(id: number): void {
    this.notesService
      .deleteNote(id)
      .pipe(take(1))
      .subscribe(() => {
        this.notesService.getNotes();
        this.setDialog(false);
      });
  }

  public setDialog(dialogStatus: boolean): void {
    this.showDialog = dialogStatus;
  }
}
