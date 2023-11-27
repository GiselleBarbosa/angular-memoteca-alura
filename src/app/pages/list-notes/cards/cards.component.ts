import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NotesModel } from '@models/notes-model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() public note!: NotesModel;

  @Output() public deleteClicked = new EventEmitter();

  public widthCardNotes(): string {
    if (this.note.conteudo.length >= 100) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  public deleteEvent(): void {
    this.deleteClicked.emit();
  }
}
