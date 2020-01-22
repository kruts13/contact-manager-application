import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
// import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'app-contactmanager-app',
  template: `<app-sidenav></app-sidenav>`,
  styleUrls: [],
  providers: [MatIconRegistry]
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg')
    )
  }

  ngOnInit() {
  }

}