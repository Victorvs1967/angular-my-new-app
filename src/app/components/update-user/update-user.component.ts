import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id!: number;
  user!: User;
  submitted = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  editUser() {
    this.userService.updateUser(this.id, this.user).subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.usersList();
  }

  onSubmit() {
    this.submitted = true;
    this.editUser();
  }

  usersList() {
    this.router.navigate(['users']);
  }

}
