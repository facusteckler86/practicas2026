import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
   
})
export class App {
  protected readonly title = signal('practica2026');
}


