import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
    message: string = '';
    @Output() messageCreated: EventEmitter<{
        message: string;
        author: string;
    }> = new EventEmitter<{ message: string; author: string }>();

    constructor() {}

    ngOnInit(): void {}

    createMessage() {
        console.log('pressed! the message was: ' + this.message);
        this.messageCreated.emit({ message: this.message, author: 'barry' });
    }
}
