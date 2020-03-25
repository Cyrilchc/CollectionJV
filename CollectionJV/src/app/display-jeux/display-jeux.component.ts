import { Component, OnInit, Inject } from '@angular/core';
import { Jeu } from '../jeu';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-display-jeux',
  templateUrl: './display-jeux.component.html',
  styleUrls: ['./display-jeux.component.css']
})
export class DisplayJeuxComponent implements OnInit {
  NoGame: string
  constructor(public dialogRef: MatDialogRef<DisplayJeuxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Jeu[]) { }

  ngOnInit(): void {
  }

  onOkClick(): void {
    this.dialogRef.close();
  }
}
