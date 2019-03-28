import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from 'src/store/state/app.state';
import { selectSelectedUser } from 'src/store/selectors/user.selectors';
import { GetUser } from 'src/store/actions/user.actions';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }
}
