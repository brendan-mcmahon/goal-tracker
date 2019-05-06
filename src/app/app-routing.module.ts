import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';

const routes: Routes = [
  {
    path: '**',
    component: GoalsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
