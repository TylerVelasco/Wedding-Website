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
      attending: [null, Validators.required],
      message: '',
      people: '',
      numberOfGuest: '',
      checkbox: '',
    });
  }

  onSubmit(value: any) {
    let {name, numberOfGuest, attending, message, people, checkbox} = this.form.value;
    if(message==''){
      message='N/A';
    }
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
    if(checkbox == true) {
      this.form.reset();
    }
    else
    {
      this.db.list('/live').push(formRequest);
      this.form.reset();
    }
  }
  update(): void {
    this.form.get('attending').valueChanges.subscribe(
      (attending: string)=>{
        if(attending === "Yes"){
          this.form.get('numberOfGuest').setValidators([Validators.required]);
          this.form.get('people').setValidators([Validators.required])
        }
        else if(attending === "No"){
          this.form.get('numberOfGuest').setValidators([]);
          this.form.get('people').setValidators([]);
          this.form.get('numberOfGuest').setValue('');
          this.form.get('people').setValue('');
        }
        this.form.get('numberOfGuest').updateValueAndValidity();
        this.form.get('people').updateValueAndValidity();
      }
    );
    this.form.get('numberOfGuest').valueChanges.subscribe(
      (total: number)=>{
        if(total > 0){
          this.form.get('people').setValidators([Validators.required])
        }
        else if(total === 0){
          this.form.get('people').setValidators([]);
        }
        this.form.get('people').updateValueAndValidity();
      }
    )
  }

}
