import { CEPService } from './Services/CepService/cep.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';

import { EditClientComponent } from './edit-client/edit-client.component';
import { AddEstoqueComponent } from './add-estoque/add-estoque.component';
import { CepComponent } from './EdCep/cep.component';
import { AddOsComponent } from './add-os/add-os.component';
import { AddFunComponent } from './add-fun/add-fun.component';
import { ListOsComponent } from './list-os/list-os.component';
import { AddServicoComponent } from './add-servico/add-servico.component';
import { EditOsComponent } from './edit-os/edit-os.component';
import { AdcPecasComponent } from './adc-pecas/adc-pecas.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { IndexComponent } from './index/index.component';
import { OsNegadoComponent } from './os-negado/os-negado.component';
import { OsFinalizadoComponent } from './os-finalizado/os-finalizado.component';
import { ListFunComponent } from './list-fun/list-fun.component';
import { HistPagComponent } from './hist-pag/hist-pag.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { RelatorioFuncionarioComponent } from './relatorio-funcionario/relatorio-funcionario.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterClientComponent,
    ListComponent,
    EditClientComponent,
    AddEstoqueComponent,
    CepComponent,
    AddOsComponent,
    AddFunComponent,
    ListOsComponent,
    AddServicoComponent,
    EditOsComponent,
    AdcPecasComponent,
    PagamentoComponent,
    IndexComponent,
    OsNegadoComponent,
    OsFinalizadoComponent,
    ListFunComponent,
    HistPagComponent,
    RelatorioComponent,
    RelatorioFuncionarioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,   
    FormsModule,
    ReactiveFormsModule, 
   


 
  ],
  providers: [CEPService],
  bootstrap: [AppComponent],
  entryComponents:[
    EditClientComponent
  ]
})
export class AppModule { }
