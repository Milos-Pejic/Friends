import { Component, Input, OnInit } from '@angular/core';
import { User } from '../shared/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: User; 
  @Input() i;
  constructor() {}

  ngOnInit(): void {}
}
