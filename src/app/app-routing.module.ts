import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { FoodsComponent } from './foods/foods.component';
import { SettingsComponent } from './settings/settings.component';
import { LibraryComponent } from './library/library.component';
import { VidstreamComponent } from './vidstream/vidstream.component';


const routes: Routes = [

{ path: '',   redirectTo: 'home', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'tasks', component: TasksComponent },
{ path: 'home', component: HomeComponent },
{ path: 'vids', component: VidstreamComponent },
{ path: 'foods', component: FoodsComponent },
{ path: 'settings', component: SettingsComponent },
{ path: 'coaching', component: LibraryComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
