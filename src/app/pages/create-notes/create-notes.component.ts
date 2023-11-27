import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NotesService } from 'src/app/core/services/notes.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css'],
})
export class CreateNotesComponent implements OnInit {
  public previewNotes$ = this.notesService.previewNotes$;

  public form!: FormGroup;

  constructor(
    private notesService: NotesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.notesService.getPreviewNotes();

    this.form = this.fb.group({
      conteudo: ['', Validators.required],
      autoria: ['', Validators.required],
      modelo: ['', Validators.required],
    });
  }

  createNote() {
    const formData = this.form.getRawValue();
    if (this.form.valid) {
      this.notesService.createNote(formData).pipe(first()).subscribe();
      alert('Criado com sucesso!');
      this.router.navigate(['/list-notes']);
    } else {
      alert('Dados invalidos');
    }
  }

  public editNote(id: number): void {
    alert('clicou em editar');
  }
}
