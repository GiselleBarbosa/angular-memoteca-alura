import { Component, OnInit } from '@angular/core';

import { NotesService } from 'src/app/core/services/notes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css'],
})
export class CreateNotesComponent implements OnInit {
  public previewNotes$ = this.notesService.previewNotes$;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getPreviewNotes().subscribe();
  }

  criarPensamento() {
    alert('Criado pensamento');
  }
}
