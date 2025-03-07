import { Component, Input, Output, EventEmitter } from '@angular/core';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

// interface is used for defining only object type while not the case with type
interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

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
