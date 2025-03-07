import {
  Component,
  computed,
  signal,
  Input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output()
  select = new EventEmitter<string>();
  //or
  // select = output<string>();

  get imagePath() {
    return '/assets/users/' + this.avatar;
  }

  onSelectUser(id: string) {
    this.select.emit(id);
  }
}
