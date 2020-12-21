import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Humming Web App';
    name = 'Let"s see';

    onMessageCreated(messageData: { message: string; author: string }) {
        console.log(
            `A message recieved from ${messageData.author}:\t ${messageData.message}`
        );
    }
}
