import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FoodsComponent } from './foods/foods.component';
import { SportsComponent } from './sports/sports.component';
import { LibraryComponent } from './library/library.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DashboardComponent,
    HomeComponent,
    FoodsComponent,
    SportsComponent,
    LibraryComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
