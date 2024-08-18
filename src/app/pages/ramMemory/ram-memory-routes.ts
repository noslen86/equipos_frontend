import {Routes} from "@angular/router";
import {RamMemoryListComponent} from "./ram-memory-list/ram-memory-list.component";
import {RamMemoryCreateComponent} from "./ram-memory-create/ram-memory-create.component";
import {RamMemoryEditComponent} from "./ram-memory-edit/ram-memory-edit.component";
import {RamMemoryDeleteComponent} from "./ram-memory-delete/ram-memory-delete.component";
import {RamMemoryDetailsComponent} from "./ram-memory-details/ram-memory-details.component";

export const RAM_MEMORY_ROUTES: Routes = [
  { path: "", redirectTo: "memorias-ram/inicio", pathMatch: "full" },
  { path: "memorias-ram/inicio", component: RamMemoryListComponent },
  { path: "memorias-ram/nueva", component: RamMemoryCreateComponent },
  { path: "memorias-ram/:id/modificar", component: RamMemoryEditComponent },
  { path: "memorias-ram/:id/eliminar", component: RamMemoryDeleteComponent },
  { path: "memorias-ram/:id/detalles", component: RamMemoryDetailsComponent }
];
