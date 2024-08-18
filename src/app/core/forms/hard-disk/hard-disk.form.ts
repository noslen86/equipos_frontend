import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HardDiskForm {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      capacity: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6),
        Validators.pattern('[a-zA-Z0-9 ]*')
      ]),
      brand: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern('[a-zA-Z]*')
      ]),
      model: new FormControl(''),
      type: new FormControl('', [
        Validators.required
      ])
    });
  }
}
