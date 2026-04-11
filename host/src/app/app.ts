import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Angular 21 {{ title() }}</h1>

    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/angular">Angular MFE</a> |
      <a routerLink="/react">React MFE</a>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class App {
  protected readonly title = signal('host');
}
