import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, buttonText: string, messageType: 'success' | 'error') {
    this.snackBar.open(message, buttonText, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [`${messageType}-snackbar`]
    });
  }
}
