import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService} from "../../services/user.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    profileForm = new FormGroup({
        name: new FormControl()
    });
    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {

    }

    connection() {
      //Permet de donner le nom à BehaviorSubject
        this.userService.setUser(this.profileForm.get('name').value);
        this.router.navigateByUrl('tchat');
    }

}