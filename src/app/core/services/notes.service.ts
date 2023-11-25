import { BehaviorSubject, Observable, Subject, first, tap } from 'rxjs';

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

  public getPreviewNotes(): Observable<PreviewNotesModel[]> {
    return this.http
      .get<PreviewNotesModel[]>(`${this.notesApi}/previewNotes`)
      .pipe(
        tap((previewNotes) => {
          this.previewNotesObservable.next(previewNotes);
        })
      );
  }

  public getNotes(): Observable<NotesModel[]> {
    return this.http.get<NotesModel[]>(`${this.notesApi}/notes`).pipe(
      tap((notes) => {
        this.notesObservable.next(notes);
      })
    );
  }

  public createNote(note: NotesModel): Observable<NotesModel> {
    return this.http.post<NotesModel>(`${this.notesApi}/notes`, note);
  }
}
