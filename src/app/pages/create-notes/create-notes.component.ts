import { Component, OnInit } from '@angular/core';
import { PreviewNoteMock } from 'src/app/core/mocks/previewNote.mock';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css'],
})
export class CreateNotesComponent implements OnInit {
  public note = PreviewNoteMock;

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Criado pensamento');
  }
}
