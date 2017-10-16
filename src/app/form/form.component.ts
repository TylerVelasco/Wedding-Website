import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent{
  form: FormGroup;
  showHideGuest: string;

  constructor(private fb: FormBuilder, private af: AngularFireAuth, private db: AngularFireDatabase, private modalService: NgbModal) {
    this.createForm();
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  createForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      // email: ['', Validators.required],
      attending: [null, Validators.required],
      message: '',
      people: '',
      numberOfGuest: '',
    });
  }

  onSubmit(value: any) {
    const {name, numberOfGuest, attending, message, people} = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Attending: ${attending}</div>
      <div>Number of People Attending: ${numberOfGuest}</div>
      <div>Guests: ${people}</div>
      <div>Message: ${message}</div>
      <br>
      <div>Date: ${date}</div>
    `;
    const formRequest = { name, numberOfGuest, date, attending, html };
    this.db.list('/messages').push(formRequest);
    this.form.reset();
  }
  update(): void {
    this.form.get('attending').valueChanges.subscribe(
      (attending: string)=>{
        if(attending === "Yes"){
          this.form.get('numberOfGuest').setValidators([Validators.required])
        }
        else if(attending === "No"){
          this.form.get('numberOfGuest').setValidators([])
        }
        this.form.get('numberOfGuest').updateValueAndValidity();
      }
    )
  }

}
