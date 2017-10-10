import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  fullImagePath1: string;
  fullImagePath2: string;
  fullImagePath3: string;
  fullImagePath4: string;
  fullImagePath5: string;
  showHideGuest: string;
  constructor(private fb: FormBuilder, private af: AngularFireAuth, private db: AngularFireDatabase) {
    this.createForm();
    this.fullImagePath1 = 'assets/pup2.jpg';
    this.fullImagePath2 = 'assets/pup1.jpg';
    this.fullImagePath3 = 'assets/large.jpg';
    this.fullImagePath4 = 'assets/bbb.jpg';
    this.fullImagePath5 = 'assets/dillards.jpg';
  }

  createForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      // email: ['', Validators.required],
      numberOfGuest: [null, Validators.required],
      attending: 0,
    });
  }
    onSubmit() {
      const {name, numberOfGuest, attending} = this.form.value;
      const date = Date();
      const html = `
      <div>From: ${name}</div>
      <div>Attending: ${attending}</div>
      <div>Number of People Attending: ${numberOfGuest}</div>
       <div>Date: ${date}</div>
    `;
      const formRequest = { name, numberOfGuest, date, attending, html };
      this.db.list('/messages').push(formRequest);
      this.form.reset();
    }
}
