import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MercuriusAngCheckboxModule, MercuriusAngLinkModule,MercuriusAngBtnPrimaryModule,MercuriusAngBtnSecondaryModule,MercuriusAngModalModule } from 'mercurius-ang';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MercuriusAngCheckboxModule,
    MercuriusAngLinkModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MercuriusAngBtnPrimaryModule,
    MercuriusAngBtnSecondaryModule,
    MercuriusAngModalModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
