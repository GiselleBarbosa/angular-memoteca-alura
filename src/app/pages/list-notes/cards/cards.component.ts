import { Component, Input } from '@angular/core';

import { NotesModel } from '../../../core/model/notes-model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() public note!: NotesModel;

  public widthCardNotes(): string {
    if (this.note.conteudo.length >= 100) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
