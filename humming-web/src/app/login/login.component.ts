import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../shared/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    userName = '';
    password = '';
    @Output() userLoggedIn: EventEmitter<string> = new EventEmitter<string>();

    constructor(private userService: UsersService) {}

    ngOnInit(): void {}

    onLoginClick() {
        this.userService.login(this.userName, this.password);

        let currentUser = this.userService.getCurrentUser();
        if (currentUser.userName == this.userName) {
            this.userLoggedIn.emit(this.userName);
        } else {
            this.password = '';
        }
    }
}
