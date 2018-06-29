import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {MatSnackBar} from '@angular/material';
// import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    constructor(
        public messagesService: MessageService,
        public snackBar: MatSnackBar) {
    }

    ngOnInit() {
    }

    public openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
