import { Component, OnInit, Inject } from '@angular/core';
import { Jeu } from '../jeu';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editjeudialog',
  templateUrl: './editjeudialog.component.html',
  styleUrls: ['./editjeudialog.component.css']
})
export class EditjeudialogComponent implements OnInit {
  breakpoint: number;
  constructor(public dialogRef: MatDialogRef<EditjeudialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Jeu) {
  }

  ngOnInit(): void {
    if (window.innerWidth > 975) {
      this.breakpoint = 2;
    } else if (window.innerWidth <= 975) {
      this.breakpoint = 1;
    }
  }

  /**
* Évènement de redimensionnement
* Permet d'obtenir un comportement responsive de la grille
* @param event 
*/
  onResize(event) {
    if (window.innerWidth > 975) {
      this.breakpoint = 2;
    } else if (window.innerWidth <= 975) {
      this.breakpoint = 1;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
