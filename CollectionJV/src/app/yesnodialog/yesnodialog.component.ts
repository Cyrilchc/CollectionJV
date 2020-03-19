import { Component, OnInit, Inject } from '@angular/core';
import { Console } from '../console';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-yesnodialog',
  templateUrl: './yesnodialog.component.html',
  styleUrls: ['./yesnodialog.component.css']
})
export class YesnodialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<YesnodialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
