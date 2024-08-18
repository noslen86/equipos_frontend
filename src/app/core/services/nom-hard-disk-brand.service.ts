import { Injectable } from '@angular/core';
import { NomHardDiskBrandCreateDto } from "../dto/nomHardDiskBrand/nom-hard-disk-brand-create.dto";
import {Apollo} from "apollo-angular";
import {
  CREATE_NOM_HARD_DISK_BRAND, REMOVE_NOM_HARD_DISK_BRAND,
  UPDATE_NOM_HARD_DISK_BRAND
} from "../queries/nom-hard-disk-brand.graphql.operations";
import {map} from "rxjs";
import {CustomSnackbarService} from "../../shared/custom-snackbar/custom-snackbar.service";
import {NomHardDiskBrandUpdateDto} from "../dto/nomHardDiskBrand/nom-hard-disk-brand-update.dto";
import {EnumDialogMessageTypes} from "../enum/enum-dialog-message-types";
import {EnumMessageTypes} from "../enum/enum-message-types";
import {EnumButtonMessage} from "../enum/enum-button-message";
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class NomHardDiskBrandService {

  constructor(
    private apollo: Apollo,
    private snackBarService: CustomSnackbarService
  ) { }

  async create(nomHardDiskBrandDto: NomHardDiskBrandCreateDto): Promise<void> {
    try {
      await this.apollo.mutate({
        mutation: CREATE_NOM_HARD_DISK_BRAND,
        variables: {
          input: nomHardDiskBrandDto
        },
      }).pipe(
        map((data) => {
          this.snackBarService.openSnackBar(
            EnumDialogMessageTypes.CREATE_SUCCESS,
            EnumButtonMessage.CLOSE,
            EnumMessageTypes.SUCCESS);
        })
      ).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  async update(nomHardDiskBrandDto: NomHardDiskBrandUpdateDto) {
    console.log('Datos a actualizar: ', nomHardDiskBrandDto);
    try {
      await this.apollo.mutate({
        mutation: UPDATE_NOM_HARD_DISK_BRAND,
        variables: {
          input: nomHardDiskBrandDto
        },
      }).pipe(
        map((data) => {
          this.snackBarService.openSnackBar(
            EnumDialogMessageTypes.UPDATE_SUCCESS,
            EnumButtonMessage.CLOSE,
            EnumMessageTypes.SUCCESS);
        })
      ).toPromise();
    }
    catch (e: any) {
      this.snackBarService.openSnackBar(e, "Cerrar", "error");
    }
  }

  async delete(id: number) {
    console.log('Elemento a eliminar: ', id);
    try {
      await this.apollo.mutate({
        mutation: REMOVE_NOM_HARD_DISK_BRAND,
        variables: {
          id: id,
        }
      }).pipe(
        map((data) => {
          this.snackBarService.openSnackBar(
            EnumDialogMessageTypes.DELETE_SUCCESS,
            EnumButtonMessage.CLOSE,
            EnumMessageTypes.SUCCESS);
        })
      ).toPromise();
    }
    catch (e: any) {
      this.snackBarService.openSnackBar(e, EnumButtonMessage.CLOSE, "error");
    }
  }

  exportTableToExcel(tableId: string, fileName: string): void {
    const table = document.getElementById(tableId);
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Hoja 1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  }
}
