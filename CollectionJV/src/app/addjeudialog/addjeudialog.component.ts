import { Component, OnInit, Inject } from '@angular/core';
import {Jeu} from '../jeu';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-addjeudialog',
  templateUrl: './addjeudialog.component.html',
  styleUrls: ['./addjeudialog.component.css']
})
export class AddjeudialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddjeudialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Jeu) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
