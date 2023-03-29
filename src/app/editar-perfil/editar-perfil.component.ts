import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent{

  electedPreference: string | undefined;

  onPreferenceChange() {
    this.electedPreference = (<HTMLInputElement>document.getElementById("preferencia")).value;
  }

}
