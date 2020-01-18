import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Users CRUD';
  users: User[] = [];

  isLoaded = false;
  s1: Subscription;
  s2: Subscription;
  s3: Subscription;
  s4: Subscription;

  constructor(private userService: UserService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshUsersList();
  }

  refreshUsersList() {
    this.isLoaded = false;

    this.s1 = this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        this.isLoaded = true;
      });
  }

  createUser() {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '400px',
      panelClass: 'create-edit-user-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.s2 = this.userService.createUser(result)
          .subscribe(() => {
            this.refreshUsersList();
          });
      }
    });
  }

  editUser(user: User) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
      panelClass: 'create-edit-user-dialog',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.s3 = this.userService.editUser(result)
          .subscribe(() => {
            this.refreshUsersList();
          });
      }
    });
  }

  removeUser(id: string) {
    this.isLoaded = false;

    this.s4 = this.userService.removeUser(id)
      .subscribe((users: User[]) => {
        this.users = users;
        this.isLoaded = true;
      });
  }

  ngOnDestroy(): void {
    this.s1.unsubscribe();
    this.s2.unsubscribe();
    this.s3.unsubscribe();
    this.s4.unsubscribe();
  }
}
