import { Injectable } from '@angular/core';

interface MenuItem {
  title: string;
  type: string;
  badge?: {
    class: string;
    text: string;
  };
  link?: string;
  active?: boolean;
  icon?: string;
  submenus?: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {
  toggled = false;
  private backgroundImage = true;

  menus: MenuItem[] = [
  {
    title: 'Main navigation',
    type: 'header'
  },
  {
    title: 'Dashboards',
    type: 'dropdown',
    icon: '<i class=ion-ios-cellular"></i>',
    submenus: [
      {
        title: 'Default',
        type: 'simple',
        badge: {
          class: 'badge badge-danger',
          text: 'NEW',
        },
        link: '/dashboard-default',
      },
      {
        title: 'Analytics',
        type: 'simple',
        link: '/dashboard-analytics',
      }
    ]
  },
  {
    title: 'Applications',
    type: 'dropdown',
    submenus: [
      {
        title: 'Calendar',
        type: 'simple',
        link: '/applications-calendar',
      },
      {
        title: 'Chat',
        type: 'simple',
        link: '/applications-chat',
      }
    ]
  },
  {
    title: 'UI Elements',
    type: 'header',
  },
  {
    title: 'Avatars',
    type: 'simple',
    icon: `<fa-icon [icon]="['fab', 'github']"></fa-icon>`,
    link: '/avatars',
  },
  {
    title: 'Navigation menus',
    type: 'simple',
    link: '/navigation-menus',
  },
  {
    title: 'Charts',
    type: 'header',
  },
  {
    title: 'Apex Charts',
    type: 'simple',
    link: '/apex-charts',
  },
  {
    title: 'Gauges Charts',
    type: 'simple',
    link: '/gauges-charts',
  }
];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarMenuState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  getMenuItemByUrl(aMenus: MenuItem[], aUrl: string): MenuItem {
    for (const theMenu of aMenus) {
      if (theMenu.link && theMenu.link === aUrl) {
        return theMenu;
      }

      if (theMenu.submenus && theMenu.submenus.length > 0) {
        const foundItem = this.getMenuItemByUrl(theMenu.submenus, aUrl);
        if (foundItem) {
          return foundItem;
        }
      }
    }

    return undefined;
  }

  toggleMenuItem(aMenus: MenuItem[], aCurrentMenu: MenuItem): MenuItem[] {
    return aMenus.map((aMenu: MenuItem) => {
      if (aMenu === aCurrentMenu) {
        aMenu.active = !aMenu.active;
      } else {
        aMenu.active = false;
      }

      if (aMenu.submenus && aMenu.submenus.length > 0) {
        aMenu.submenus = this.toggleMenuItem(aMenu.submenus, aCurrentMenu);

        if (aMenu.submenus.find(aChild => aChild.active)) {
          aMenu.active = true;
        }
      }

      return aMenu;
    });
  }

  get hasBackgroundImage() {
    return this.backgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this.backgroundImage = hasBackgroundImage;
  }
}
