import { Component, OnInit, Input } from '@angular/core';

import { IUser } from 'src/models/users.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user: IUser;

  constructor() {}

  ngOnInit() {}
}
