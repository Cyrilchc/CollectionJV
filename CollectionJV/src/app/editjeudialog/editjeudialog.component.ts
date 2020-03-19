import { Component, OnInit, Inject } from '@angular/core';
import { Jeu } from '../jeu';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editjeudialog',
  templateUrl: './editjeudialog.component.html',
  styleUrls: ['./editjeudialog.component.css']
})
export class EditjeudialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditjeudialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Jeu) {
  }

  ngOnInit(): void {
    console.log("Edition", this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
