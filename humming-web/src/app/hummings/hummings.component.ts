import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hummings',
    templateUrl: './hummings.component.html',
    styleUrls: ['./hummings.component.css'],
})
export class HummingsComponent implements OnInit {
    constructor() {
        console.log('HummingsComponent constructor');
    }

    ngOnInit(): void {
        this.messages.push({
            author: 'steve',
            messageContent: 'pizza is here',
        });
        this.messages.push({ author: 'joe', messageContent: 'bring pizza' });
        this.messages.push({
            author: 'steve',
            messageContent: 'on the way home!',
        });

        console.log('HummingsComponent init');
    }

    messages: { author: string; messageContent: string }[] = [];

    onMessageCreated(messageData: { message: string; author: string }) {
        this.messages.push({
            author: messageData.author,
            messageContent: messageData.message,
        });
    }
}
