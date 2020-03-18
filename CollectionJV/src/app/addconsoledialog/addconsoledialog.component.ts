import { Component, OnInit, Inject } from '@angular/core';
import { Console } from '../console';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addconsoledialog',
  templateUrl: './addconsoledialog.component.html',
  styleUrls: ['./addconsoledialog.component.css']
})
export class AddconsoledialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddconsoledialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Console) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
