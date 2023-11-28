import { Component, Input, OnInit } from '@angular/core';
import { NotesModel } from '../../../core/model/notes-model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() public note!: NotesModel;

  public ngOnInit(): void {
   
  }

  public widthCardNotes(): string {
    if (this.note.conteudo.length >= 100) {
      return 'pensamento-g';
    
    }
    return 'pensamento-p';
}
}
