import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {SidenavComponent} from "./shared/sidenav/sidenav.component";
import {MainContentComponent} from "./shared/main-content/main-content.component";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidenavComponent,
    MainContentComponent,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'equipos';
  sidebarOpen: boolean = true;

  sidebarToggler() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
