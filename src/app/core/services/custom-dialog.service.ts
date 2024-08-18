import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CustomDialogComponent} from "../../shared/custom-dialog/custom-dialog.component";
import {HardDiskFormModel} from "../models/hard-disk/hard-disk-form.model";
import {EnumDialogSizeTypes} from "../enum/enum-dialog-size-types";

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {

  constructor(private customMatDialog: MatDialog) { }

  openFormDialog(data: HardDiskFormModel): MatDialogRef<CustomDialogComponent> {
    return this.customMatDialog.open(CustomDialogComponent, {
      data,
      width: EnumDialogSizeTypes.SMALL
    });
  }
}
