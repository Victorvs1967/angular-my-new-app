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
  email!: string;
  isLoading = true;

  displayedColumns = ['name', 'email', 'occupation', 'action', 'actionu', 'actiond'];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.isLoading = false;
    });
  }

  userDetails(id: number) {
    this.router.navigate(['user', id]);
  }

  addUser() {
    this.router.navigate(['add']);
  }

  editUser(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => this.ngOnInit(), error => console.log(error));
  }

  search() {
    this.isLoading = true;
    this.users = this.users.filter(res => {
      if (!this.users || !this.email) {
        this.userService.getUsers().subscribe(data => this.users = data)
      } else {
        (error: any) => console.log(error);
      }
      return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
    })
  }

}
