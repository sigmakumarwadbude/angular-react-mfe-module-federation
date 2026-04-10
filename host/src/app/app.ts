import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Angular 21 Host</h1>

    <nav>
      <a routerLink="/angular">Angular MFE</a> |
      <a routerLink="/react">React MFE</a>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class App {
  protected readonly title = signal('host');
}
