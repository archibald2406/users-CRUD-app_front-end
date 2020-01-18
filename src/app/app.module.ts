import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { FormsModule } from '@angular/forms';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    CreateUserDialogComponent,
    EditUserDialogComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
