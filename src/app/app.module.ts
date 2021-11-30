import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { CrmComponent } from './crm/crm.component';
import { UniComponent } from './uni/uni.component';
import { SupportComponent } from './support/support.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortalComponent } from './portal/portal.component';
import { IntranetComponent } from './intranet/intranet.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { BlogComponent } from './blog/blog.component';
import { SupportformComponent } from './supportform/supportform.component';
import { SupportopenComponent } from './supportopen/supportopen.component';
import { SupportclosedComponent } from './supportclosed/supportclosed.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CrmComponent,
    UniComponent,
    SupportComponent,
    DashboardComponent,
    PortalComponent,
    IntranetComponent,
    ProjectmanagementComponent,
    BlogComponent,
    SupportformComponent,
    SupportopenComponent,
    SupportclosedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
