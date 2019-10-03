import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
  {
    "title": "Main navigation",
    "type": "header"
  },
  {
    "title": "Dashboards",
    "type": "dropdown",
    "icon": "<i class=\"ion-ios-cellular\"></i>",
    "submenus": [
      {
        "title": "Default",
        "type": "simple",
        "badge": {
          "class": "badge badge-danger",
          "text": "NEW"
        },
        "link": "/dashboard-default"
      },
      {
        "title": "Analytics",
        "type": "simple",
        "link": "/dashboard-analytics"
      }
    ]
  },
  {
    "title": "Applications",
    "type": "dropdown",
    "submenus": [
      {
        "title": "Calendar",
        "type": "simple",
        "link": "/applications-calendar"
      },
      {
        "title": "Chat",
        "type": "simple",
        "link": "/applications-chat"
      }
    ]
  },
  {
    "title": "UI Elements",
    "type": "header"
  },
  {
    "title": "Avatars",
    "type": "simple",
    "icon": "<fa-icon [icon]=\"['fab', 'github']\"></fa-icon>",
    "link": "/avatars"
  },
  {
    "title": "Navigation menus",
    "type": "simple",
    "link": "/navigation-menus"
  },
  {
    "title": "Charts",
    "type": "header"
  },
  {
    "title": "Apex Charts",
    "type": "simple",
    "link": "/apex-charts"
  },
  {
    "title": "Gauges Charts",
    "type": "simple",
    "link": "/gauges-charts"
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

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
