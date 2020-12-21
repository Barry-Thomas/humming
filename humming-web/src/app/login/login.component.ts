import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    userName = '';
    password = '';
    validUsers: { userName: string; password: string }[] = [
        { userName: 'barry', password: 'b@rry' },
        { userName: 'steve', password: 'st3v3' },
        { userName: 'pete', password: 'p3t3' },
    ];

    @Output() userLoggedIn: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    onLoginClick() {
        let user = this.validUsers.find((u) => u.userName == this.userName);

        console.log(user);
        if (user && user.password == this.password) {
            console.log('user valid');
            this.userLoggedIn.emit(user.userName);
        } else {
            this.userName = '';
            this.password = '';
        }
    }
}
