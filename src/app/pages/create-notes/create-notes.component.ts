import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, first, take } from 'rxjs';

import { NotesService } from 'src/app/core/services/notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css'],
})
export class CreateNotesComponent implements OnInit {
  public previewNotes$ = this.notesService.previewNotes$;

  public form!: FormGroup;

  public isEditing = false;
  public subscription!: Subscription;

  public id!: string | null;

  constructor(
    private notesService: NotesService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.notesService.getPreviewNotes();

    this.subscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');

      if (this.id) {
        this.notesService
          .getNoteById(Number(this.id))
          .pipe(take(1))
          .subscribe((note) => {
            this.form.setValue({
              conteudo: note.conteudo,
              autoria: note.autoria,
              modelo: note.modelo,
            });
          });
      }
    });

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
      this.router.navigate(['/list-notes']);
    } else {
      alert('Dados invalidos');
    }
  }

  public editNote(id: number): void {
    const dataForm = this.form.getRawValue();
    this.notesService
      .editNote(Number(this.id), dataForm)
      .pipe(take(1))
      .subscribe();
  }

  public saveModifications() {
    if (this.id) {
      this.editNote(Number(this.id));
      alert('Atualização realizada com sucesso!')
    } else {
      this.createNote();
      this.router.navigate(['/list-notes']);
    }
  }
}
