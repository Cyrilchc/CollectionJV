import { Component, OnInit, Inject } from '@angular/core';
import { Console } from '../console';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editconsoledialog',
  templateUrl: './editconsoledialog.component.html',
  styleUrls: ['./editconsoledialog.component.css']
})
export class EditconsoledialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EditconsoledialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Console) {
  }

  ngOnInit(): void {
    console.log("Edition", this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
