import { Observable, Subject, take, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotesModel } from '../model/notes-model';
import { PreviewNotesModel } from '../model/preview-notes-model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notesApi = 'http://localhost:3000';

  private previewNotesObservable = new Subject<PreviewNotesModel[]>();
  public readonly previewNotes$ = this.previewNotesObservable.asObservable();

  private notesObservable = new Subject<NotesModel[]>();
  public readonly notes$ = this.notesObservable.asObservable();

  constructor(private http: HttpClient) {}

  public getPreviewNotes(): void {
    this.http
      .get<PreviewNotesModel[]>(`${this.notesApi}/previewNotes`)
      .pipe(take(1))
      .subscribe((previewNotes) => {
        this.previewNotesObservable.next(previewNotes);
      });
  }

  public getNotes(): void {
    this.http
      .get<NotesModel[]>(`${this.notesApi}/notes`)
      .pipe(take(1))
      .subscribe((notes) => {
        this.notesObservable.next(notes);
      });
  }

  public createNote(note: NotesModel): Observable<NotesModel> {
    return this.http.post<NotesModel>(`${this.notesApi}/notes`, note);
  }

  public deleteNote(id: number): Observable<NotesModel> {
    return this.http.delete<NotesModel>(`${this.notesApi}/notes/${id}`);
  }
}
