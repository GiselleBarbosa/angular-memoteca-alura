import { Component, Input, OnInit } from '@angular/core';
import { NotesModel } from '../../../core/model/notes-model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() note!: NotesModel;

  constructor() {}

  ngOnInit(): void {}
}
