import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotesModel } from '../model/notes-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notesApi = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public getPreniewNotes(): Observable<NotesModel> {
    return this.http.get<NotesModel>(`${this.notesApi}/previewNotes`);
  }

  public getNotes(): Observable<NotesModel> {
    return this.http.get<NotesModel>(`${this.notesApi}/notes`);
  }
}
