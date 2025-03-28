import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [CardComponent, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output()
  select = new EventEmitter<string>();
  //or
  // select = output<string>();

  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser(id: string) {
    this.select.emit(id);
  }
}
