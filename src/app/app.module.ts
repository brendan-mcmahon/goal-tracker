import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {SuiModule} from 'ng2-semantic-ui';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalComponent } from './goal/goal.component';
import { CreateGoalComponent } from './create-goal/create-goal.component';
import { EditGoalComponent } from './edit-goal/edit-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalComponent,
    CreateGoalComponent,
    EditGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSmartModalModule.forRoot(),
    SuiModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
