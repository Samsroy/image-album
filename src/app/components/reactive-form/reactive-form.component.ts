import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReactiveFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

  ) { }

  ngOnInit(): void {
  }

}
