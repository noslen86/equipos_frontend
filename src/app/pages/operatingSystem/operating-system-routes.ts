import {Routes} from "@angular/router";
import {OperatingSystemListComponent} from "./operating-system-list/operating-system-list.component";
import {OperatingSystemCreateComponent} from "./operating-system-create/operating-system-create.component";
import {OperatingSystemEditComponent} from "./operating-system-edit/operating-system-edit.component";
import {OperatingSystemDeleteComponent} from "./operating-system-delete/operating-system-delete.component";
import {OperatingSystemDetailsComponent} from "./operating-system-details/operating-system-details.component";

export const OPERATING_SYSTEM_ROUTES: Routes = [
  { path: "", redirectTo: "sistemas-operativos/inicio", pathMatch: "full" },
  { path: "sistemas-operativos/inicio", component: OperatingSystemListComponent },
  { path: "sistemas-operativos/nuevo", component: OperatingSystemCreateComponent },
  { path: "sistemas-operativos/:id/modificar", component: OperatingSystemEditComponent },
  { path: "sistemas-operativos/:id/eliminar", component: OperatingSystemDeleteComponent },
  { path: "sistemas-operativos/:id/detalles", component: OperatingSystemDetailsComponent }
];
