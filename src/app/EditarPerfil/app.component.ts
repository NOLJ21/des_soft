import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPreference: string | undefined;

  onPreferenceChange() {
    this.selectedPreference = (<HTMLInputElement>document.getElementById("preferencia")).value;
  }
}
