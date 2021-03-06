import { RelatorioComponent } from './relatorio/relatorio.component';
import { ListFunComponent } from './list-fun/list-fun.component';
import { OsFinalizadoComponent } from './os-finalizado/os-finalizado.component';
import { OsNegadoComponent } from './os-negado/os-negado.component';
import { EditOsComponent } from './edit-os/edit-os.component';
import { AddServicoComponent } from './add-servico/add-servico.component';
import { ListOsComponent } from './list-os/list-os.component';
import { AddFunComponent } from './add-fun/add-fun.component';
import { AddEstoqueComponent } from './add-estoque/add-estoque.component';
import { ListComponent } from './list/list.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOsComponent } from './add-os/add-os.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {path:'registerclient',component:RegisterClientComponent},
  {path:'list', component:ListComponent},
  {path:'cadastropeca', component:AddEstoqueComponent},
  {path:'addos', component:AddOsComponent},
  {path:'registerfunc', component:AddFunComponent},
  {path:'listos', component:ListOsComponent},
  {path:'registerserv', component:AddServicoComponent},
  {path:'EditOS/:id', component:EditOsComponent},
  {path:'', component:IndexComponent},
  {path:'listosneg', component:OsNegadoComponent},
  {path:'listosfin', component:OsFinalizadoComponent},
  {path:'listfun', component:ListFunComponent},
  {path:'relatorio', component:RelatorioComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
