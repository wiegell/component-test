import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-lib.component.html',
  styleUrls: ['./second-lib.component.css'],
})
export class SecondLibComponent {}
