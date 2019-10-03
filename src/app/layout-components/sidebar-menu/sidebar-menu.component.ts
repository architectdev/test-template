import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
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
  constructor(public SidebarMenuService: SidebarMenuService) {
    this.menus = SidebarMenuService.getMenuList();
   }

  ngOnInit() {
  }

  getSideBarState() {
    return this.SidebarMenuService.getSidebarState();
  }

  toggle(currentMenu) {
    this.menus.forEach(element => {
      if (element === currentMenu) {
        currentMenu.active = !currentMenu.active;
      } else {
        element.active = false;
      }
    });
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.SidebarMenuService.hasBackgroundImage;
  }

}
