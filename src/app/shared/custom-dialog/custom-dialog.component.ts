import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {HardDiskInterface} from "../../core/interfaces/hard-disk-interface";
import {HardDiskService} from "../../core/services/hard-disk.service";
import {HardDiskFormModel} from "../../core/models/hard-disk/hard-disk-form.model";
import {NgTemplateOutlet} from "@angular/common";
import {NomHardDiskBrandForm} from "../../core/forms/nom-hard-disk-brand/nom-hard-disk-brand.form";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    NgTemplateOutlet
  ],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss'
})
export class CustomDialogComponent implements OnInit {
  hardDiskList: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: HardDiskInterface,
    private hardDiskService: HardDiskService,
    @Inject(MAT_DIALOG_DATA) public formData: HardDiskFormModel,
    private fb: NomHardDiskBrandForm
  ) { }

  ngOnInit(): void {
    this.hardDiskService.emitHardDiskListData().subscribe((data) => {
      this.hardDiskList = data;
    });
    if (this.formData.editObject) {
      this.fb.form.patchValue(this.formData.editObject);
    }
  }
}
