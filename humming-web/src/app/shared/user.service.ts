import { Injectable } from '@angular/core';

Injectable();
export class UsersService {
    currentUser: User = this.getEmptyUser();

    validUsers: User[] = [
        { userName: 'barry', password: 'b@rry' },
        { userName: 'steve', password: 'st3v3' },
        { userName: 'pete', password: 'p3t3' },
    ];

    login(userName: string, password: string): User {
        let user = this.validUsers.find((u) => u.userName == userName);

        console.log(user);

        if (user && user.password == password) {
            this.currentUser = user;
            return user;
        }

        return this.getEmptyUser();
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isLoggedIn(): boolean {
        return this.currentUser.userName != '';
    }

    getEmptyUser(): User {
        return { userName: '', password: '' };
    }
}

Injectable();
export interface User {
    userName: string;
    password: string;
}
