import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Apollo } from "apollo-angular";
import { GET_HARD_DISKS } from "../../../core/queries/hard-disk.graphql.operations";
import { HardDiskInterface } from "../../../core/interfaces/hard-disk-interface";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatCheckbox } from "@angular/material/checkbox";
import { NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { CustomDialogService } from "../../../core/services/custom-dialog.service";
import { MatButton } from "@angular/material/button";
import { HardDiskService } from "../../../core/services/hard-disk.service";
import { PaginatorTranslation } from "../../../core/translations/paginator.translation";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatError, MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatLabel } from "@angular/material/form-field";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CustomDialogComponent } from "../../../shared/custom-dialog/custom-dialog.component";
import { CustomSnackbarService } from "../../../shared/custom-snackbar/custom-snackbar.service";
import { HardDiskForm } from "../../../core/forms/hard-disk/hard-disk.form";
import { MatHint } from "@angular/material/form-field";
import { MatOption, MatSelect } from "@angular/material/select";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
  selector: 'app-hard-disk-list',
  standalone: true,
  imports: [
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCheckbox,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatPaginator,
    NgIf,
    RouterLink,
    MatIcon,
    MatButton,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatError,
    MatHint,
    MatSelect,
    MatOption,
    MatProgressSpinner,
    MatProgressSpinner,
    MatProgressBar,
  ],
  templateUrl: './hard-disk-list.component.html',
  styleUrl: './hard-disk-list.component.scss',
  providers: [
    {
      provide: MatPaginatorIntl, useClass: PaginatorTranslation,
    }
  ]
})
export class HardDiskListComponent implements OnInit {
    loading: boolean = true;
    hardDisks: HardDiskInterface[] = [];
    errors: any;

    displayColumns: string[] = ["select", "id", "capacity", "brand", "model", "type", "actions"];
    dataSource!: MatTableDataSource<HardDiskInterface>;
    selection = new SelectionModel(true, []);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    hardDiskFormGroup: FormGroup;

    errorCapacityMessage: string = "";
    errorBrandMessage: string = "";
    errorTypeMessage: string = "";

    // Se utliza para almacenar la referencia del matdialog abierto, para luego poderlo cerrar y limpiar sus campos
    // desde el método "onCreateHardDisk()"
    private matDialogRef!: MatDialogRef<CustomDialogComponent>;

    constructor(
      private apollo: Apollo,
      private dialogService: CustomDialogService,
      private hardDiskService: HardDiskService,
      private snackBarService: CustomSnackbarService,
      private fb: HardDiskForm
    ) {
      this.hardDiskFormGroup = this.fb.form;
    }

    ngOnInit(): void {
      this.getAllHardDisks();
    }

    getAllHardDisks() {
      this.apollo.watchQuery({
        query: GET_HARD_DISKS
      }).valueChanges.subscribe(({ data, error }: any): void => {
        this.hardDisks = data.hard_disks;
        this.dataSource = new MatTableDataSource<HardDiskInterface>(this.hardDisks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loading = false;
        this.hardDiskService.updateHardDiskListData(this.hardDisks);
        if (error) {
          this.snackBarService.openSnackBar(error, 'Cerrar', 'error');
        }
      });
    }

    selectHandler(row: HardDiskInterface) {
      this.selection.toggle(row as never);
    }

    openHardDiskFormDialog(template: TemplateRef<any>) {
      this.matDialogRef = this.dialogService.openFormDialog({
          template
      });

      this.matDialogRef
        .afterClosed()
        .subscribe(res => {
          this.hardDiskFormGroup.reset();
          console.log("Formulario cerrado.");
      });
    }

    onCreateHardDisk() {
      let newHardDisk: string = `${this.hardDiskFormGroup.value.brand} ${this.hardDiskFormGroup.value.model}`;
      console.log(newHardDisk);

      let index: number = 0;
      let founded: boolean = false;

      while (index < (this.hardDisks).length && !founded) {
        let tempBrandModel: string = `${this.hardDisks[index].brand} ${this.hardDisks[index].model}`;
        if (tempBrandModel === newHardDisk) {
          founded = true;
        }
        index++;
      }
      if (founded) {
        let message: string = "El elemento ya se encuentra insertado en el sistema.";
        this.snackBarService.openSnackBar(message, 'Cerrar', 'error');
      }
      else {
        let message: string = "Enviar los datos del formulario al servicio para que los envie al backend.";
        this.snackBarService.openSnackBar(message, 'Aceptar', 'success');
        console.log("Enviar formulario al backend.", this.hardDiskFormGroup.value);
      }

      this.hardDiskFormGroup.reset();
      this.matDialogRef.close();
    }

  updateErrorMessageCapacityControl (): string {
    if (this.hardDiskFormGroup.controls['capacity'].hasError('required')) {
      this.errorCapacityMessage = 'Este campo es requerido';
    }
    else if (this.hardDiskFormGroup.controls['capacity'].hasError('minLength')) {
      this.errorCapacityMessage = 'Debe insertar al menos 4 caracteres.';
    }
    else if (this.hardDiskFormGroup.controls['capacity'].hasError('maxLength')) {
      this.errorCapacityMessage = 'Debe insertar menos de 6 caracteres.';
    }
    else if (this.hardDiskFormGroup.controls['capacity'].hasError('pattern')) {
      this.errorCapacityMessage = 'Sólo numeros y letras.';
    }
    else {
      return this.errorCapacityMessage;
    }
    return this.errorCapacityMessage
  }

  updateErrorMessageBrandControl (): string {
    if (this.hardDiskFormGroup.controls['brand'].hasError('required')) {
      this.errorBrandMessage = 'Este campo es requerido';
    }
    else if (this.hardDiskFormGroup.controls['brand'].hasError('minLength')) {
      this.errorBrandMessage = 'Debe insertar al menos 4 caracteres.';
    }
    else if (this.hardDiskFormGroup.controls['brand'].hasError('maxLength')) {
      this.errorBrandMessage = 'Debe insertar menos de 10 caracteres.';
    }
    else if (this.hardDiskFormGroup.controls['brand'].hasError('pattern')) {
      this.errorBrandMessage = 'Solo se aceptan letras.';
    }
    else {
      return this.errorBrandMessage;
    }
    return this.errorBrandMessage;
  }

  updateErrorMessageTypeControl(): string {
    if (this.hardDiskFormGroup.controls['brand'].hasError('required')) {
      this.errorTypeMessage = 'Este campo es requerido';
    }
    return this.errorTypeMessage;
  }
}
