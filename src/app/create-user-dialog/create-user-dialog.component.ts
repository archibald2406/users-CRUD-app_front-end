import { Component } from '@angular/core';
import { User } from '../user.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent {
  user: User = {
    name: '',
    surname: '',
    phone: '',
    mail: ''
  };

  constructor(public dialogRef: MatDialogRef<CreateUserDialogComponent>) {}
}
