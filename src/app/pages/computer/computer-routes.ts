import {Routes} from "@angular/router";
import {ComputerListComponent} from "./computer-list/computer-list.component";
import {ComputerCreateComponent} from "./computer-create/computer-create.component";
import {ComputerEditComponent} from "./computer-edit/computer-edit.component";
import {ComputerDeleteComponent} from "./computer-delete/computer-delete.component";
import {ComputerDetailsComponent} from "./computer-details/computer-details.component";

export const COMPUTER_ROUTES: Routes = [
  { path: "", redirectTo: "computadoras/inicio", pathMatch: "full" },
  { path: "computadoras/inicio", component: ComputerListComponent },
  { path: "computadoras/nueva", component: ComputerCreateComponent },
  { path: "computadoras/:id/modificar", component: ComputerEditComponent },
  { path: "computadoras/:id/eliminar", component: ComputerDeleteComponent },
  { path: "computadoras/:id/detalles", component: ComputerDetailsComponent }
];
