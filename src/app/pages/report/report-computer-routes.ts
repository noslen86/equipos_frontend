import {Routes} from "@angular/router";
import {ReportComputersComponent} from "./report-computers/report-computers.component";

export const REPORT_COMPUTERS_ROUTES: Routes = [
  { path: "", redirectTo: "reportes/reportes_de_computadoras", pathMatch: "full" },
  { path: "reportes/reportes_de_computadoras", component: ReportComputersComponent },
];
