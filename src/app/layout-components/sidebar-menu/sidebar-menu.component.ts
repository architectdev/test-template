import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { SidebarMenuService } from './sidebar-menu.service';
// import { MenusService } from './menus.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarMenuComponent implements OnInit {
  menus = [];
  constructor(
    private sidebarMenuService: SidebarMenuService,
    private router: Router
  ) {
    this.menus = [ ...sidebarMenuService.getMenuList() ];
   }

  ngOnInit() {
    const theActiveMenu = this.sidebarMenuService.getMenuItemByUrl(this.menus, this.router.url);
    if (theActiveMenu) {
      this.toggle(theActiveMenu);
    }
  }

  getSideBarState() {
    return this.sidebarMenuService.getSidebarState();
  }

  toggle(currentMenu) {
    this.menus = this.sidebarMenuService.toggleMenuItem(this.menus, currentMenu);
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarMenuService.hasBackgroundImage;
  }

}
