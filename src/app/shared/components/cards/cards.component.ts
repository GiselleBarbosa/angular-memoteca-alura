import { Component, OnInit } from '@angular/core';

import { noteMock } from '../../mocks/note.mock';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  public pensamento = noteMock;

  constructor() {}

  ngOnInit(): void {}
}
