import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tweetdialog',
  templateUrl: './tweetdialog.component.html',
  styleUrls: ['./tweetdialog.component.scss']
})
export class TweetdialogComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              private  dialogRef: MatDialogRef<TweetdialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      tweetText: ''
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }
}
