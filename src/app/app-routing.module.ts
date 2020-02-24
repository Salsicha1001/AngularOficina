import { AddEstoqueComponent } from './add-estoque/add-estoque.component';
import { ListComponent } from './list/list.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'registerclient',component:RegisterClientComponent},
  {path:'list', component:ListComponent},
  {path:'cadastropeca', component:AddEstoqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
