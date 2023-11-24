import { RouterModule, Routes } from '@angular/router';

import { CreateNotesComponent } from './pages/create-notes/create-notes.component';
import { ListNotesComponent } from './pages/list-notes/list-notes/list-notes.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-notes',
    pathMatch: 'full',
  },

  {
    path: 'list-notes',
    component: ListNotesComponent,
  },

  {
    path: 'create-notes',
    component: CreateNotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
