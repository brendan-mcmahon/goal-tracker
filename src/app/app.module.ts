import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalComponent } from './goal/goal.component';
import { CreateGoalComponent } from './create-goal/create-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalComponent,
    CreateGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
