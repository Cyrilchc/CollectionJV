import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jeu } from '../jeu'
import { AddjeudialogComponent } from '../addjeudialog/addjeudialog.component';
import { JeuserviceService } from '../jeuservice.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  jeu: Jeu;
  jeuAny: any[]=[];
  constructor(public dialog: MatDialog, private jeuservice: JeuserviceService) { }

  ngOnInit(): void {
    this.getjeux()
    console.log(this.jeuAny);
  }

  getjeux() {
    this.jeuservice.getjeux().then((response: any) => {
      this.jeuAny = response.map((ev) => {
        ev.body = ev;
        return ev;
      });
      console.log(this.jeuAny);
      this.jeuAny.forEach(element => {
        alert(element.console_nom)
      });
    });
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddjeudialogComponent, {
      width: '60em',
      data: {jeu: this.jeu}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.jeu = result;
      console.log(this.jeu);
      let response = this.jeuservice.createJeu(this.jeu)
      console.log(response);
    });
  }

}
