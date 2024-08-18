import {Routes} from "@angular/router";
import {DisplayListComponent} from "./display-list/display-list.component";

export const DISPLAY_ROUTES: Routes = [
  { path: "", redirectTo: "monitores/inicio", pathMatch: "full" },
  { path: "monitores/inicio", component: DisplayListComponent }
];
