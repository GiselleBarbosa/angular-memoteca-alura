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

  public showDialog = false;

  public dialogMessage!: string;
  public confirmationMessage!: string;

  public btnCancel!: string;
  public btnConfirm!: string;

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
      this.dialogMessage = 'Anotação criada com sucesso!';
      this.confirmationMessage = 'O que deseja fazer?';
      this.btnCancel = 'Voltar ao inicio';
      this.btnConfirm = 'Cadastrar nova';
      this.setDialog(true);
      this.form.reset();
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
    this.dialogMessage = 'Anotação atualizada com sucesso!';
    this.confirmationMessage = 'O que deseja fazer?';
    this.btnCancel = 'Voltar ao inicio';
    this.btnConfirm = 'Conferir a anotação';
    this.setDialog(true);
  }

  public saveModifications() {
    if (this.id) {
      this.editNote(Number(this.id));
    } else {
      this.createNote();
      this.notesService.getNotes();
    }
  }

  public setDialog(dialogStatus: boolean): void {
    this.showDialog = dialogStatus;
  }

  public navigateToHome(): void {
    this.router.navigate(['/list-notes']);
  }
}
