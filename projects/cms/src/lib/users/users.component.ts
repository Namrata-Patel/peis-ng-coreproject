import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { CmsService } from "../cms.service";

@Component({
  selector: 'lib-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private cmsService: CmsService) { }

  ngOnInit() {
    this.getUsers();
    console.log("get users");
  }

  getUsers(): void {
    this.cmsService.getUsers().subscribe(arg => this.users = arg);
  }

}
