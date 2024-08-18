import {Routes} from "@angular/router";
import {NomHardDiskBrandListComponent} from "./nom-hard-disk-brand-list/nom-hard-disk-brand-list.component";

export const NOM_HARD_DISK_BRAND_ROUTES: Routes = [
  { path: "", redirectTo: "nom_marcas_discos_duros/inicio", pathMatch: "full" },
  { path: "nom_marcas_discos_duros/inicio", component: NomHardDiskBrandListComponent },
];
