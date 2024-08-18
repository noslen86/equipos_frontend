import {Routes} from "@angular/router";
import {HardDiskListComponent} from "./hard-disk-list/hard-disk-list.component";
import {HardDiskCreateComponent} from "./hard-disk-create/hard-disk-create.component";
import {HardDiskEditComponent} from "./hard-disk-edit/hard-disk-edit.component";
import {HardDiskDeleteComponent} from "./hard-disk-delete/hard-disk-delete.component";
import {HardDiskDetailsComponent} from "./hard-disk-details/hard-disk-details.component";

export const HARD_DISK_ROUTES: Routes = [
  { path: "", redirectTo: "discos-duros/inicio", pathMatch: "full" },
  { path: "discos-duros/inicio", component: HardDiskListComponent },
  { path: "discos-duros/inicio/nuevo", component: HardDiskCreateComponent },
  { path: "discos-duros/inicio/modificar/:id", component: HardDiskEditComponent },
  { path: "discos-duros/inicio/eliminar/:id", component: HardDiskDeleteComponent },
  { path: "discos-duros/inicio/detalles/:id", component: HardDiskDetailsComponent }
];
