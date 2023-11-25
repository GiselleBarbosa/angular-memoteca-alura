import { Component, OnDestroy, OnInit } from '@angular/core';

import { NotesService } from './../../../core/services/notes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit, OnDestroy {
  private unsub!: Subscription;

  public notes$ = this.notesService.notes$;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.unsub = this.notesService.getNotes().subscribe();
  }

  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }
}
