import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: User[];
  user: User = new User();

  constructor(private userServise: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userServise.getUsers().subscribe(data => this.users = data);
  }

  userDetails(id: number) {
    this.router.navigate(['user', id]);
  }

}
