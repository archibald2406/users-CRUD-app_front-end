import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../user.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {
  user: User;
  isLoaded = false;

  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) {}

  ngOnInit() {
    this.user = {
      id: this.data.id,
      name: this.data.name,
      surname: this.data.surname,
      phone: this.data.phone,
      mail: this.data.mail
    };

    this.isLoaded = true;
  }
}
