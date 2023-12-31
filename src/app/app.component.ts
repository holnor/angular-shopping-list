import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-shopping-list';
  chosenFeature = 'recipe';

  onNavigate(navigateTo: string) {
    this.chosenFeature = navigateTo;
  }
}
