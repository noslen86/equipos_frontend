import {Component, OnInit, Output} from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import { EventEmitter } from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatListItem, MatListItemIcon} from "@angular/material/list";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatToolbarRow,
    MatButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatDivider,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatListItemIcon
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  srcUserImage: string = "assets/user.jpg";
  @Output()
  toggleSidebarEvent: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
