import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CustomConfirmDialogComponent} from "./custom-confirm-dialog.component";
import {EnumDialogSizeTypes} from "../../core/enum/enum-dialog-size-types";
import {NomHardDiskBrandService} from "../../core/services/nom-hard-disk-brand.service";

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  constructor(
    private customDeleteMatDialog: MatDialog,
    private nomHardDiskBrandService: NomHardDiskBrandService
  ) { }

  openConfirmDialog(data: any, elementType: string) {
    let element: string = '';
    switch (elementType) {
      case 'NomHardDiskBrand':
        element = 'la marca de disco duro';
        break;
      case 'NomHardDiskModel':
        element = 'el modelo de disco duro';
        break;
      case 'NomHardDiskType':
        element = 'el tipo de disco duro';
        break;
      default:
        element = 'el disco duro';
    }

    return this.customDeleteMatDialog.open(CustomConfirmDialogComponent, {
      data: {
        data,
        type: element
      },
      width: EnumDialogSizeTypes.TINY
    });
  }

  deleteElement(id: number, elementType: string) {
    switch (elementType) {
      case 'NomHardDiskBrand':
        console.log(`Enviar el elemento de tipo "NomHardDiskBrand" con ID: ${id} al backend para eliminarlo del sistema.`);
        this.nomHardDiskBrandService.delete(id).then(r => {});
        break;
      case 'NomHardDiskModel':
        console.log(`Enviar el elemento de tipo "NomHardDiskModel" con ID: ${id} al backend para eliminarlo del sistema.`);
        break;
      case 'NomHardDiskType':
        console.log(`Enviar el elemento de tipo "NomHardDiskType" con ID: ${id} al backend para eliminarlo del sistema.`);
        break;
    }
  }
}
