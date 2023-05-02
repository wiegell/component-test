import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FirstlibComponent } from 'firstlib';
import { SecondLibComponent } from 'second-lib';
@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    FirstlibComponent,
    SecondLibComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
}
