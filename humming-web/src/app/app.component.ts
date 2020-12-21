import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Humming Web App';
    messages: { author: string; messageContent: string }[] = [];

    onMessageCreated(messageData: { message: string; author: string }) {
        console.log(
            `A message recieved from ${messageData.author}:\t ${messageData.message}`
        );

        this.messages.push({
            author: messageData.author,
            messageContent: messageData.message,
        });

        console.log('messages:');
        console.log(this.messages);
    }

    ngOnInit() {
        this.messages.push({
            author: 'steve',
            messageContent: 'pizza is here',
        });
        this.messages.push({ author: 'joe', messageContent: 'bring pizza' });
        this.messages.push({
            author: 'steve',
            messageContent: 'on the way home!',
        });
    }
}
