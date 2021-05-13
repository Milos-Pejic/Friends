import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from './shared/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  directUsers: User[] = [];
  friendsOfFriends: User[] = [];
  suggestedFriends: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((resp: any) => {
      console.log(resp);
      this.users = resp;
    });
  }

  onChange(id) {
    this.directUsers = [];
    this.friendsOfFriends=[];
    this.suggestedFriends=[]
    let obj = {};
    let tmp=[]
    this.users.forEach((user) => {
      if (user.id == id) {
        for (let idOfFriends of user.friends) {
          let friend = this.users.find((user) => user.id == idOfFriends);
          if (friend.id != id) {
            this.directUsers.push(friend);
          }

          for (let idFriend of friend.friends) {
            let friendsOfFriend = this.users.find((user) => user.id == idFriend);
            if ( this.directUsers.indexOf(friendsOfFriend) == -1 &&friendsOfFriend.id != id) {
              if (this.friendsOfFriends.indexOf(friendsOfFriend) == -1) {
                this.friendsOfFriends.push(friendsOfFriend);
              }
              if (obj[idFriend]) {
                obj[idFriend] = obj[idFriend] + 1;
              } else {
                obj[idFriend] = 1;
              }
              Object.keys(obj).forEach((keys) => {
                if (obj[keys] >= 2) {
                 tmp.push(keys)
                }
                for(let idSugFriend of tmp){
                  let sugFriend= this.users.find(user=>user.id==idSugFriend)
                  if(this.suggestedFriends.indexOf(sugFriend)==-1){
                    this.suggestedFriends.push(sugFriend)
                  }
                }
              });
            }
          }
        }
      }
    });
  }
}
