import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { TimesheetSharedModule, UserRouteAccessService } from './shared';
import { TimesheetAppRoutingModule} from './app-routing.module';
import { TimesheetHomeModule } from './home/home.module';
import { TimesheetAdminModule } from './admin/admin.module';
import { TimesheetAccountModule } from './account/account.module';
import { TimesheetEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here
import { TimesheetPortalModule } from './portal/portal.module';
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        TimesheetAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TimesheetSharedModule,
        TimesheetHomeModule,
        TimesheetPortalModule,
        TimesheetAdminModule,
        TimesheetAccountModule,
        TimesheetEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TimesheetAppModule {}
