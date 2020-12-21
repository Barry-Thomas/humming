import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Humming Web App';
    userName: string;
    showLogin: boolean;

    constructor() {
        console.log('constructor called, set username to empty, show login!');
        this.userName = '';
        this.showLogin = true;
    }

    ngOnInit(): void {
        console.log('init called');
    }

    onUserLoggedIn(userName: string) {
        if (userName != '') {
            console.log('userName: ' + this.userName);
            this.userName = userName;
            console.log('hide login');
            this.showLogin = false;
        } else {
            console.log("user didn't login");
        }
    }
}
