import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NotesModel } from '@models/notes-model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() public note!: NotesModel;

  @Output() public deleteBtnClicked = new EventEmitter();
  @Output() public editBtnClicked = new EventEmitter();

  public widthCardNotes(): string {
    if (this.note.conteudo.length >= 100) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  public deleteEvent(): void {
    this.deleteBtnClicked.emit();
  }

  public editEvent(): void {
    this.editBtnClicked.emit();
  }
}
