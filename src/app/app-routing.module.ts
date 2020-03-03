import { AddFunComponent } from './add-fun/add-fun.component';
import { AddEstoqueComponent } from './add-estoque/add-estoque.component';
import { ListComponent } from './list/list.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOsComponent } from './add-os/add-os.component';


const routes: Routes = [
  {path:'registerclient',component:RegisterClientComponent},
  {path:'list', component:ListComponent},
  {path:'cadastropeca', component:AddEstoqueComponent},
  {path:'addos', component:AddOsComponent},
  {path:'registerfunc', component:AddFunComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
