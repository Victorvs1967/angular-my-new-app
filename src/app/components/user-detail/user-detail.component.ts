import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user!: User;
  id!: number;

  constructor(private userServise: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];

    this.userServise.getUser(this.id).subscribe(
      (data: any) => this.user = data, 
      error => console.log(error));
  }

  usersList() {
    this.router.navigate(['user']);
  }

}
