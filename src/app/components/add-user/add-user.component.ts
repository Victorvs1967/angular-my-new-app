import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.addUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.usersList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  usersList() {
    this.router.navigate(['users']);
  }

}
