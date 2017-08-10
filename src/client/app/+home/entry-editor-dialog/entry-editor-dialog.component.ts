import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry-editor-dialog',
  templateUrl: './entry-editor-dialog.component.html',
  styleUrls: ['./entry-editor-dialog.component.scss']
})
export class EntryEditorDialogComponent {
  entryForm: FormGroup;

  constructor(private dialogRef: MdDialogRef<EntryEditorDialogComponent>, private fb: FormBuilder) {
    this.entryForm = fb.group({
      foreignText: ['', Validators.required],
      translation: ['']
    });
  }

  onSubmit() {
    if (!this.entryForm.valid) {
      return;
    }

    this.dialogRef.close(this.entryForm.value.foreignText);
  }
}
