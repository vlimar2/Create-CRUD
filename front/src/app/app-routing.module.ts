import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncAddComponent } from './func-add/func-add.component';
import { FuncEditComponent } from './func-edit/func-edit.component';
import { FuncGetComponent } from './func-get/func-get.component'

const routes: Routes = [
  {
    path : 'funcionario',
    component : FuncGetComponent
  },
  {
    path : 'funcionario/create',
    component : FuncAddComponent
  },
  {
    path : 'funcionario/edit:id',
    component : FuncEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
