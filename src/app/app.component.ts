import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() clclId!: string;
  @Input() showDataTable!: boolean;
  @Input() otherID!: string;
  
}
