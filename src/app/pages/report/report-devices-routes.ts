import {Routes} from "@angular/router";
import {ReportDevicesComponent} from "./report-devices/report-devices.component";

export const REPORT_DEVICES_ROUTES: Routes = [
  { path: "", redirectTo: "reportes/reportes_de_dispositivos", pathMatch: "full" },
  { path: "reportes/reportes_de_dispositivos", component: ReportDevicesComponent }
];
