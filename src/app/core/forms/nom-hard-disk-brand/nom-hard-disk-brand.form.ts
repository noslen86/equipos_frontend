import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class NomHardDiskBrandForm {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern('[a-zA-Z ]*')
      ]),
    });
  }
}
