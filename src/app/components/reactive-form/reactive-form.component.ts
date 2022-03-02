import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
export interface DialogData {
 
  name: string;
}
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  contactForm:any=FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<ReactiveFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    
    return this.contactForm.controls[control].hasError(error);
  }
}
