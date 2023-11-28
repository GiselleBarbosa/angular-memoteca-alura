import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @Input() public showDialog!: boolean;
  @Input() public btnConfirm!: string;
  @Input() public btnCancel!: string;
  @Input() public message!: string;
  @Input() public confirmationMessage!: string;

  @Output() public btnConfirmClicked = new EventEmitter();
  @Output() public btnCancelClicked = new EventEmitter();

  public confirmEvent(): void {
    this.btnConfirmClicked.emit();
  }

  public cancelEvent() {
    this.btnCancelClicked.emit();
  }
}
