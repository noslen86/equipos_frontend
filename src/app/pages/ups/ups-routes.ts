import {Routes} from "@angular/router";
import {UpsListComponent} from "./ups-list/ups-list.component";

export const UPS_ROUTES: Routes = [
  { path: "", redirectTo: "ups/inicio", pathMatch: "full" },
  { path: "ups/inicio", component: UpsListComponent }
];
