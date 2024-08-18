import {Routes} from "@angular/router";
import {TechnicalStatusListComponent} from "./technical-status-list/technical-status-list.component";
import {TechnicalStatusCreateComponent} from "./technical-status-create/technical-status-create.component";
import {TechnicalStatusEditComponent} from "./technical-status-edit/technical-status-edit.component";
import {TechnicalStatusDeleteComponent} from "./technical-status-delete/technical-status-delete.component";
import {TechnicalStatusDetailsComponent} from "./technical-status-details/technical-status-details.component";

export const TECHNICAL_STATUS_ROUTES: Routes = [
  { path: "", redirectTo: "estados-tecnicos/inicio", pathMatch: "full" },
  { path: "estados-tecnicos/inicio", component: TechnicalStatusListComponent },
  { path: "estados-tecnicos/nuevo", component: TechnicalStatusCreateComponent },
  { path: "estados-tecnicos/:id/modificar", component: TechnicalStatusEditComponent },
  { path: "estados-tecnicos/:id/eliminar", component: TechnicalStatusDeleteComponent },
  { path: "estados-tecnicos/:id/detalles", component: TechnicalStatusDetailsComponent }
];
