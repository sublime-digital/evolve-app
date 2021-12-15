import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { FoodsComponent } from './foods/foods.component';
import { SportsComponent } from './sports/sports.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [

{ path: 'dashboard', component: DashboardComponent },
{ path: 'tasks', component: TasksComponent },
{ path: 'home', component: HomeComponent },
{ path: 'foods', component: FoodsComponent },
{ path: 'sports', component: SportsComponent },
{ path: 'library', component: LibraryComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
