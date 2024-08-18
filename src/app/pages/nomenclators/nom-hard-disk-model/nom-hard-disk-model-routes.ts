import {Routes} from "@angular/router";
import {NomHardDiskModelListComponent} from "./nom-hard-disk-model-list/nom-hard-disk-model-list.component";

export const NOM_HARD_DISK_MODEL_ROUTES: Routes = [
  { path: "", redirectTo: "nom_modelos_discos_duros/inicio", pathMatch: "full" },
  { path: "nom_modelos_discos_duros/inicio", component: NomHardDiskModelListComponent }
];
