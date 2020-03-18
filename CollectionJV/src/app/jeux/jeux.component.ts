import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jeu } from '../jeu'
import { AddjeudialogComponent } from '../addjeudialog/addjeudialog.component';
@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  jeu: Jeu;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddjeudialogComponent, {
      width: '60em',
      data: {jeu: this.jeu}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.jeu = result;
    });
  }

}
