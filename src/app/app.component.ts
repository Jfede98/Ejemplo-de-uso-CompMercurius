import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {AngModalComponent} from 'mercurius-ang';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-externa-ejemplo';
  linkref="https://www.xtrim.com.ec/politica-de-privacidad-datos/";
  label_link="Política de privacidad de datos personales"
  label_btn="Botón"
  label_a_modal="Modal"
  constructor(public matDialog: MatDialog) { }
  openModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "275px";
    dialogConfig.width = "475px";
    dialogConfig.panelClass="custom-dialog-container";
    dialogConfig.data = {
      title:"Prueba",
      description:"Prueba realizada en el sistema de diseño Mercurius de un modal",
      titulo_btn:"Aceptar"
    }
    const modalDialog = this.matDialog.open(AngModalComponent, dialogConfig);
  }
}
