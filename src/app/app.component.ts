import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppheaderComponent } from './components/container/header/header.component';
import { AppfooterComponent } from './components/container/footer/footer.component';
import { AppmainComponent } from './components/container/main-div/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppheaderComponent, AppmainComponent, AppfooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'book-store';
}
