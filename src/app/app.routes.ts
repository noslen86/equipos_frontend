import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: "iniciar-sesion",
    loadChildren: () => import('./auth/login/login-routes').then(c => c.LOGIN_ROUTES)
  },
  {
    path: "home",
    loadChildren: () => import('./pages/home/home-routes').then(c => c.HOME_ROUTE)
  },
  {
    path: "dashboard",
    loadChildren: () => import('./pages/dashboard/dashboard-routes').then(c => c.DASHBOARD_ROUTE)
  },
  {
    path: "discos-duros",
    loadChildren: () => import('./pages/hardDisk/hard-disk-routes').then(c => c.HARD_DISK_ROUTES)
  },
  {
    path: "computadoras",
    loadChildren: () => import('./pages/computer/computer-routes').then(c => c.COMPUTER_ROUTES)
  },
  {
    path: "memorias-ram",
    loadChildren: () => import('./pages/ramMemory/ram-memory-routes').then(c => c.RAM_MEMORY_ROUTES)
  },
  {
    path: "estados-tecnicos",
    loadChildren: () => import('./pages/technicalStatus/technical-status-routes').then(c => c.TECHNICAL_STATUS_ROUTES)
  },
  {
    path: "sistemas-operativos",
    loadChildren: () => import('./pages/operatingSystem/operating-system-routes').then(c => c.OPERATING_SYSTEM_ROUTES)
  },
  {
    path: "microprocesadores",
    loadChildren: () => import('./pages/cpu/cpu-routes').then(c => c.CPU_ROUTES)
  },
  {
    path: "monitores",
    loadChildren: () => import('./pages/display/display-routes').then(c => c.DISPLAY_ROUTES)
  },
  {
    path: "estabilizadores",
    loadChildren: () => import('./pages/stabilizer/stabilizer-routes').then(c => c.STABILIZER_ROUTES)
  },
  {
    path: "ups",
    loadChildren: () => import('./pages/ups/ups-routes').then(c => c.UPS_ROUTES)
  },
  {
    path: "reportes_de_computadoras",
    loadChildren: () => import('./pages/report/report-computer-routes').then(c => c.REPORT_COMPUTERS_ROUTES)
  },
  {
    path: "reportes_de_dispositivos",
    loadChildren: () => import('./pages/report/report-devices-routes').then(c => c.REPORT_DEVICES_ROUTES)
  },
  {
    path: "nom_discos_duros_marcas",
    loadChildren: () => import('./pages/nomenclators/nom-hard-disk-brand/nom-hard-disk-brand-routes').then(c => c.NOM_HARD_DISK_BRAND_ROUTES)
  },
  {
    path: "nom_discos_duros_modelos",
    loadChildren: () => import('./pages/nomenclators/nom-hard-disk-model/nom-hard-disk-model-routes').then(c => c.NOM_HARD_DISK_MODEL_ROUTES)
  },
  {
    path: "nom_discos_duros_tipos",
    loadChildren: () => import('./pages/nomenclators/nom-hard-disk-type/nom-hard-disk-type-routes').then(c => c.NOM_HARD_DISK_TYPE_ROUTES)
  }
];
