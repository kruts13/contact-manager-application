import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatIconRegistry } from '@angular/material';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss'],
  providers: [MatIconRegistry]
})
export class NewContactDialogComponent implements OnInit {

  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  user: User;

  constructor(
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService) {
      iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg')
    )}

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  ngOnInit() {
    this.user = new User();
    console.log(this.user);
  }

  save() {
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
