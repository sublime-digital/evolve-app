import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortalComponent } from './portal/portal.component';
import { TasksComponent } from './tasks/tasks.component';
import { CrmComponent } from './crm/crm.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { IntranetComponent } from './intranet/intranet.component';
import { UniComponent } from './uni/uni.component';
import { SupportComponent } from './support/support.component';
import { SupportformComponent } from './supportform/supportform.component';
import { SupportopenComponent } from './supportopen/supportopen.component';
import { SupportclosedComponent } from './supportclosed/supportclosed.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [

{ path: 'dashboard', component: DashboardComponent },
{ path: 'portal', component: PortalComponent },
{ path: 'tasks', component: TasksComponent },
{ path: 'crm', component: CrmComponent },
{ path: 'projectmanagement', component: ProjectmanagementComponent },
{ path: 'intranet', component: IntranetComponent },
{ path: 'uni', component: UniComponent },
{ path: 'support', component: SupportComponent },
{ path: 'supportform', component: SupportformComponent },
{ path: 'supportopen', component: SupportopenComponent },
{ path: 'supportclosed', component: SupportclosedComponent },
{ path: 'blog', component: BlogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
