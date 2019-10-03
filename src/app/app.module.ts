import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Widgets

// NGX Bootstrap

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Bootstrap Core



// ApexCharts for Angular

import { NgApexchartsModule } from 'ng-apexcharts';

// Apex Charts



// Perfect Scrollbar

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
suppressScrollX: true
};

// jQuery



// Angular Component Development Kit



// FontAwesome Regular SVG Icons

import { faSquare } from '@fortawesome/free-regular-svg-icons';

// FontAwesome Brand SVG Icons

import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Angular FontAwesome Icons

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Angular FontAwesome Icons Core



// Layouts

import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { CollapsedSidebarComponent } from './layout-blueprints/collapsed-sidebar/collapsed-sidebar.component';
import { MinimalLayoutComponent } from './layout-blueprints/minimal-layout/minimal-layout.component';

// Layout components

import { HeaderComponent } from './layout-components/header/header.component';
import { HeaderDotsComponent } from './layout-components/header-dots/header-dots.component';
import { HeaderDrawerComponent } from './layout-components/header-drawer/header-drawer.component';
import { HeaderUserboxComponent } from './layout-components/header-userbox/header-userbox.component';
import { HeaderSearchComponent } from './layout-components/header-search/header-search.component';
import { HeaderMenuComponent } from './layout-components/header-menu/header-menu.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { SidebarMenuComponent } from './layout-components/sidebar-menu/sidebar-menu.component';
import { PageTitleComponent } from './layout-components/page-title/page-title.component';
import { SidebarHeaderComponent } from './layout-components/sidebar-header/sidebar-header.component';
import { SidebarFooterComponent } from './layout-components/sidebar-footer/sidebar-footer.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { RootComponent } from './layout-components/root/root.component';
import { ThemeConfiguratorComponent } from './layout-components/theme-configurator/theme-configurator.component';
import { DemoComponent } from './layout-components/demo/demo.component';

// Example components

import { ApexChartsLineComponent } from './example-components/ApexCharts/apex-charts-line/apex-charts-line.component';
import { ApexChartsAreaComponent } from './example-components/ApexCharts/apex-charts-area/apex-charts-area.component';
import { ApexChartsColumnComponent } from './example-components/ApexCharts/apex-charts-column/apex-charts-column.component';
import { ApexChartsBarComponent } from './example-components/ApexCharts/apex-charts-bar/apex-charts-bar.component';
import { ApexChartsMixedComponent } from './example-components/ApexCharts/apex-charts-mixed/apex-charts-mixed.component';
import { ApexChartsHeatmapComponent } from './example-components/ApexCharts/apex-charts-heatmap/apex-charts-heatmap.component';
import { ApexChartsRadialbarComponent } from './example-components/ApexCharts/apex-charts-radialbar/apex-charts-radialbar.component';
import { ApexChartsRadarComponent } from './example-components/ApexCharts/apex-charts-radar/apex-charts-radar.component';
import { ApexChartsIntegrationOneComponent } from './example-components/ApexCharts/apex-charts-integration-one/apex-charts-integration-one.component';
import { ApexChartsIntegrationTwoComponent } from './example-components/ApexCharts/apex-charts-integration-two/apex-charts-integration-two.component';
import { ApexChartsIntegrationThreeComponent } from './example-components/ApexCharts/apex-charts-integration-three/apex-charts-integration-three.component';
import { ApexChartsIntegrationFourComponent } from './example-components/ApexCharts/apex-charts-integration-four/apex-charts-integration-four.component';
import { AvatarsBasicComponent } from './example-components/Avatars/avatars-basic/avatars-basic.component';
import { AvatarsSizingComponent } from './example-components/Avatars/avatars-sizing/avatars-sizing.component';
import { AvatarsInitialsComponent } from './example-components/Avatars/avatars-initials/avatars-initials.component';
import { AvatarsBadgesComponent } from './example-components/Avatars/avatars-badges/avatars-badges.component';
import { AvatarsOverlapComponent } from './example-components/Avatars/avatars-overlap/avatars-overlap.component';
import { ChartjsChartsLineComponent } from './example-components/ChartjsCharts/chartjs-charts-line/chartjs-charts-line.component';
import { ChartjsChartsBarComponent } from './example-components/ChartjsCharts/chartjs-charts-bar/chartjs-charts-bar.component';
import { ChartjsChartsDoughnutComponent } from './example-components/ChartjsCharts/chartjs-charts-doughnut/chartjs-charts-doughnut.component';
import { ChartjsChartsRadarComponent } from './example-components/ChartjsCharts/chartjs-charts-radar/chartjs-charts-radar.component';
import { ChartjsChartsPolarComponent } from './example-components/ChartjsCharts/chartjs-charts-polar/chartjs-charts-polar.component';
import { ChartjsChartsDynamicComponent } from './example-components/ChartjsCharts/chartjs-charts-dynamic/chartjs-charts-dynamic.component';
import { ChartjsChartsIntegrationOneComponent } from './example-components/ChartjsCharts/chartjs-charts-integration-one/chartjs-charts-integration-one.component';
import { ChartjsChartsIntegrationTwoComponent } from './example-components/ChartjsCharts/chartjs-charts-integration-two/chartjs-charts-integration-two.component';
import { GaugesChartsBasicComponent } from './example-components/GaugesCharts/gauges-charts-basic/gauges-charts-basic.component';
import { GaugesChartsCircleProgressComponent } from './example-components/GaugesCharts/gauges-charts-circle-progress/gauges-charts-circle-progress.component';
import { GaugesChartsIntegrationOneComponent } from './example-components/GaugesCharts/gauges-charts-integration-one/gauges-charts-integration-one.component';
import { GaugesChartsIntegrationTwoComponent } from './example-components/GaugesCharts/gauges-charts-integration-two/gauges-charts-integration-two.component';
import { NavigationMenusHorizontalComponent } from './example-components/NavigationMenus/navigation-menus-horizontal/navigation-menus-horizontal.component';
import { NavigationMenusVerticalBasicComponent } from './example-components/NavigationMenus/navigation-menus-vertical-basic/navigation-menus-vertical-basic.component';
import { NavigationMenusVerticalAlternateComponent } from './example-components/NavigationMenus/navigation-menus-vertical-alternate/navigation-menus-vertical-alternate.component';
import { NavigationMenusVerticalAlternateLargeComponent } from './example-components/NavigationMenus/navigation-menus-vertical-alternate-large/navigation-menus-vertical-alternate-large.component';
import { NavigationMenusVerticalHeadersComponent } from './example-components/NavigationMenus/navigation-menus-vertical-headers/navigation-menus-vertical-headers.component';
import { NavigationMenusGridComponent } from './example-components/NavigationMenus/navigation-menus-grid/navigation-menus-grid.component';
import { NavigationMenusGridAlternateComponent } from './example-components/NavigationMenus/navigation-menus-grid-alternate/navigation-menus-grid-alternate.component';
import { NavigationMenusGridCondensedComponent } from './example-components/NavigationMenus/navigation-menus-grid-condensed/navigation-menus-grid-condensed.component';

// Example pages

import { DashboardDefaultComponent } from './example-pages/dashboard-default/dashboard-default.component';
import { DashboardAnalyticsComponent } from './example-pages/dashboard-analytics/dashboard-analytics.component';
import { ApplicationsCalendarComponent } from './example-pages/applications-calendar/applications-calendar.component';
import { ApplicationsChatComponent } from './example-pages/applications-chat/applications-chat.component';
import { AvatarsComponent } from './example-pages/avatars/avatars.component';
import { NavigationMenusComponent } from './example-pages/navigation-menus/navigation-menus.component';
import { ApexChartsComponent } from './example-pages/apex-charts/apex-charts.component';
import { GaugesChartsComponent } from './example-pages/gauges-charts/gauges-charts.component';

@NgModule({
  declarations: [
    AppComponent,

// Layout components

    HeaderComponent,
    HeaderDotsComponent,
    HeaderDrawerComponent,
    HeaderUserboxComponent,
    HeaderSearchComponent,
    HeaderMenuComponent,
    SidebarComponent,
    SidebarMenuComponent,
    PageTitleComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent,
    FooterComponent,
    RootComponent,
    ThemeConfiguratorComponent,
    DemoComponent,

    // Layouts

    LeftSidebarComponent,
    CollapsedSidebarComponent,
    MinimalLayoutComponent,

    // Example components

    ApexChartsLineComponent,
    ApexChartsAreaComponent,
    ApexChartsColumnComponent,
    ApexChartsBarComponent,
    ApexChartsMixedComponent,
    ApexChartsHeatmapComponent,
    ApexChartsRadialbarComponent,
    ApexChartsRadarComponent,
    ApexChartsIntegrationOneComponent,
    ApexChartsIntegrationTwoComponent,
    ApexChartsIntegrationThreeComponent,
    ApexChartsIntegrationFourComponent,
    AvatarsBasicComponent,
    AvatarsSizingComponent,
    AvatarsInitialsComponent,
    AvatarsBadgesComponent,
    AvatarsOverlapComponent,
    ChartjsChartsLineComponent,
    ChartjsChartsBarComponent,
    ChartjsChartsDoughnutComponent,
    ChartjsChartsRadarComponent,
    ChartjsChartsPolarComponent,
    ChartjsChartsDynamicComponent,
    ChartjsChartsIntegrationOneComponent,
    ChartjsChartsIntegrationTwoComponent,
    GaugesChartsBasicComponent,
    GaugesChartsCircleProgressComponent,
    GaugesChartsIntegrationOneComponent,
    GaugesChartsIntegrationTwoComponent,
    NavigationMenusHorizontalComponent,
    NavigationMenusVerticalBasicComponent,
    NavigationMenusVerticalAlternateComponent,
    NavigationMenusVerticalAlternateLargeComponent,
    NavigationMenusVerticalHeadersComponent,
    NavigationMenusGridComponent,
    NavigationMenusGridAlternateComponent,
    NavigationMenusGridCondensedComponent,

    // Example pages

    DashboardDefaultComponent,
    DashboardAnalyticsComponent,
    ApplicationsCalendarComponent,
    ApplicationsChatComponent,
    AvatarsComponent,
    NavigationMenusComponent,
    ApexChartsComponent,
    GaugesChartsComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,

    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    NgApexchartsModule,
    PerfectScrollbarModule,
    FontAwesomeModule,
  ],
  providers: [
    {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
   library.addIcons(faSquare, faGithub);
}
}

platformBrowserDynamic().bootstrapModule(AppModule);
