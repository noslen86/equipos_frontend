import {Routes} from "@angular/router";
import {StabilizerListComponent} from "./stabilizer-list/stabilizer-list.component";

export const STABILIZER_ROUTES: Routes = [
  { path: "", redirectTo: "estabilizadores/inicio", pathMatch: "full" },
  { path: "estabilizadores/inicio", component: StabilizerListComponent }
];
