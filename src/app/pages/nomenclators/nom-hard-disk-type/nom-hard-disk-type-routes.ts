import {Routes} from "@angular/router";
import {NomHardDiskTypeListComponent} from "./nom-hard-disk-type-list/nom-hard-disk-type-list.component";

export const NOM_HARD_DISK_TYPE_ROUTES: Routes = [
  { path: "", redirectTo: "nom_tipos_discos_duros/inicio", pathMatch: "full" },
  { path: "nom_tipos_discos_duros/inicio", component: NomHardDiskTypeListComponent }
];
