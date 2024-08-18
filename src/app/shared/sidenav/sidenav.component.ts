import { Component } from '@angular/core';
import {MatListItem, MatListItemIcon, MatListSubheaderCssMatStyler, MatNavList} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatNavList,
    MatDivider,
    MatListSubheaderCssMatStyler,
    MatIcon,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatListItemIcon
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
