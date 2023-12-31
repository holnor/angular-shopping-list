import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(navigateTo: string) {
    this.featureSelected.emit(navigateTo);
  }
}
