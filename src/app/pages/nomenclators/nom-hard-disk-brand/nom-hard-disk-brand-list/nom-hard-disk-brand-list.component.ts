import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NomHardDiskBrandInterface} from "../../../../core/interfaces/nom-hard-disk-brand-interface";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {CustomDialogComponent} from "../../../../shared/custom-dialog/custom-dialog.component";
import {Apollo} from "apollo-angular";
import {CustomDialogService} from "../../../../core/services/custom-dialog.service";
import {CustomSnackbarService} from "../../../../shared/custom-snackbar/custom-snackbar.service";
import {GET_NOM_HARD_DISK_BRAND} from "../../../../core/queries/nom-hard-disk-brand.graphql.operations";
import {NomHardDiskBrandForm} from "../../../../core/forms/nom-hard-disk-brand/nom-hard-disk-brand.form";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {PaginatorTranslation} from "../../../../core/translations/paginator.translation";
import {NomHardDiskBrandService} from "../../../../core/services/nom-hard-disk-brand.service";
import {NgForOf, NgIf} from "@angular/common";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NomHardDiskBrandCreateDto} from "../../../../core/dto/nomHardDiskBrand/nom-hard-disk-brand-create.dto";
import {NomHardDiskBrandUpdateDto} from "../../../../core/dto/nomHardDiskBrand/nom-hard-disk-brand-update.dto";
import {HardDiskFormModel} from "../../../../core/models/hard-disk/hard-disk-form.model";
import {DeleteServiceService} from "../../../../shared/custom-confirm-dialog/delete-service.service";
import {CustomConfirmDialogComponent} from "../../../../shared/custom-confirm-dialog/custom-confirm-dialog.component";
import {EnumDialogSizeTypes} from "../../../../core/enum/enum-dialog-size-types";

@Component({
  selector: 'app-nom-hard-disk-brand-list',
  standalone: true,
  imports: [
    MatProgressBar,
    MatButton,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatCheckbox,
    MatIcon,
    RouterLink,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatPaginator,
    NgIf,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatDialogActions,
    MatDialogClose,
    MatFormField,
    MatInput,
    MatLabel,
    MatHint,
    MatError,
    FormsModule,
    NgForOf,
    MatIconButton
  ],
  templateUrl: './nom-hard-disk-brand-list.component.html',
  styleUrl: './nom-hard-disk-brand-list.component.scss',
  providers: [
    {
      provide: MatPaginatorIntl, useClass: PaginatorTranslation
    }
  ]
})
export class NomHardDiskBrandListComponent implements OnInit {
  loading: boolean = false;
  nomHardDiskBrands: NomHardDiskBrandInterface[] = [];
  errors: any;

  displayColumns: string[] = ["select", "id", "name", "actions"];
  dataSource!: MatTableDataSource<NomHardDiskBrandInterface>;
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild('table') table: any;

  nomHardDiskBrandForm: FormGroup;

  errorNameMessage: string = "";

  isCreateMode: boolean = true;
  templateTitle: string = "";

  selectedNomHardDiskBrand: any;

  private matDialogRef!: MatDialogRef<CustomDialogComponent>;
  private deleteDialogRef!: MatDialogRef<CustomConfirmDialogComponent>;

  constructor(
    private apollo: Apollo,
    private dialogService: CustomDialogService,
    private snackBarService: CustomSnackbarService,
    private fb: NomHardDiskBrandForm,
    private nomHardDiskBrandService: NomHardDiskBrandService,
    private deleteService: DeleteServiceService,
  ) {
    this.nomHardDiskBrandForm = this.fb.form;
  }

  ngOnInit(): void {
    this.getAllNomHardDiskBrands();
  }

  getAllNomHardDiskBrands() {
    this.apollo.watchQuery({
      query: GET_NOM_HARD_DISK_BRAND
    }).valueChanges.subscribe(({ data, error }: any): void => {
      this.nomHardDiskBrands = data.nomHardDiskBrandList;
      this.dataSource = new MatTableDataSource<NomHardDiskBrandInterface>(this.nomHardDiskBrands);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (error) {
        this.snackBarService.openSnackBar(error, 'Cerrar', 'error');
      }
    });
  }

  setToCreateMode() {
    this.isCreateMode = true;
    this.templateTitle = "Nueva marca de disco duro";
  }

  setToUpdateMode() {
    this.isCreateMode = false;
    this.templateTitle = "Modificar marca de disco duro";
  }

  selectionHandler(row: NomHardDiskBrandInterface) {
    this.selection.toggle(row as never);
  }

  openCreateNomHardDiskBrandFormDialog(template: TemplateRef<any>, editObject?: any) {
    this.setToCreateMode();
    console.log('Modo crear nuevo objeto: ', this.isCreateMode);
    const data: HardDiskFormModel = {
      template,
      editObject
    };
    console.log(data);
    this.matDialogRef = this.dialogService.openFormDialog(data);
    this.matDialogRef.afterClosed().subscribe(res => {
      this.nomHardDiskBrandForm.reset();
    });
  }

  openEditNomHardDiskBrandFormDialog(element: any, template: TemplateRef<any>) {
    this.setToUpdateMode();
    this.selectedNomHardDiskBrand = element;
    console.log('Elemento seleccionado: ', this.selectedNomHardDiskBrand);
    console.log('Modo editar objeto existente: ', this.isCreateMode);
    const data: HardDiskFormModel = {
      template,
      editObject: element
    }
    console.log("Editar: ", data);
    this.matDialogRef = this.dialogService.openFormDialog(data);
    this.matDialogRef.afterClosed().subscribe(value => {
      this.nomHardDiskBrandForm.reset();
    })
  }

  handleSubmitButtonClickEvent() {
    if (this.isCreateMode) {
      this.onCreateNomHardDiskBrand();
    }
    else {
      this.onUpdateNomHardDiskBrand(this.selectedNomHardDiskBrand);
    }
  }

  onCreateNomHardDiskBrand() {
    const nomHardDiskBrandCreateDto: NomHardDiskBrandCreateDto = new NomHardDiskBrandCreateDto({
      name: this.nomHardDiskBrandForm.controls['name'].value,
    });
    this.nomHardDiskBrandService.create(nomHardDiskBrandCreateDto).then(value => {
      // Refresco los datos del mat-table
      this.getAllNomHardDiskBrands();
    });
    this.nomHardDiskBrandForm.reset();
    this.matDialogRef.close();
  }

  onUpdateNomHardDiskBrand(row: any) {
    const nomHardDiskBrandUpdateDto: NomHardDiskBrandUpdateDto = new NomHardDiskBrandUpdateDto({
      id: row.id,
      name: this.nomHardDiskBrandForm.controls['name'].value,
    });
    console.log("Datos antes de enviar al service: ", nomHardDiskBrandUpdateDto);
    this.nomHardDiskBrandService.update(nomHardDiskBrandUpdateDto).then(value =>  {
      // Refresco los datos del mat-table
      this.getAllNomHardDiskBrands();
    });

    this.nomHardDiskBrandForm.reset();
    this.matDialogRef.close();
  }

  onShowSelectedElementDetails(row: any) {
    console.log(`ID: ${row.id}, Nombre: ${row.name}`);
  }

  openConfirmDeleteDialog(element: any) {
    console.log(`Eliminar la marca de disco duro: ${element.name} con id: ${element.id}`);
    this.deleteDialogRef = this.deleteService.openConfirmDialog(element, 'NomHardDiskBrand');
    this.deleteDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteService.deleteElement(element.id, 'NomHardDiskBrand');
      }
    })
  }

  updateErrorMessageNameControl() {
    if (this.nomHardDiskBrandForm.controls['name'].hasError('required')) {
      this.errorNameMessage = "Este campo es obligatorio.";
    }
    else if (this.nomHardDiskBrandForm.controls['name'].hasError('minLength')) {
      this.errorNameMessage = "Debe insertar al menos 5 caracteres.";
    }
    else if (this.nomHardDiskBrandForm.controls['name'].hasError('maxLength')) {
      this.errorNameMessage = "Debe insertar menos de 10 caracteres.";
    }
    else if (this.nomHardDiskBrandForm.controls['name'].hasError('pattern')) {
      this.errorNameMessage = "Sólo letras.";
    }
    else  {
      return this.errorNameMessage;
    }
    return this.errorNameMessage;
  }
}
