import {Routes} from "@angular/router";
import {CpuListComponent} from "./cpu-list/cpu-list.component";
import {CpuCreateComponent} from "./cpu-create/cpu-create.component";
import {CpuEditComponent} from "./cpu-edit/cpu-edit.component";
import {CpuDeleteComponent} from "./cpu-delete/cpu-delete.component";
import {CpuDetailsComponent} from "./cpu-details/cpu-details.component";

export const CPU_ROUTES: Routes = [
  { path: "", redirectTo: "microprocesadores/inicio", pathMatch: "full" },
  { path: "microprocesadores/inicio", component: CpuListComponent },
  { path: "microprocesadores/nuevo", component: CpuCreateComponent },
  { path: "microprocesadores/:id/modificar", component: CpuEditComponent },
  { path: "microprocesadores/:id/eliminar", component: CpuDeleteComponent },
  { path: "microprocesadores/:id/detalles", component: CpuDetailsComponent }
];
