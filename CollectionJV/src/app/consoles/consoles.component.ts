import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Console } from '../console';
import { AddconsoledialogComponent } from '../addconsoledialog/addconsoledialog.component'
import { ConsoleserviceService } from '../consoleservice.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {
  width: number;
  console: Console;
  consoleToEdit: Console;
  consolesAny: any[] = [];
  constructor(public dialog: MatDialog, private consoleservice: ConsoleserviceService, private snackBar: MatSnackBar) { }
  breakpoint: number;

  /**
   * Lancement de la page
   * Obtient toutes les consoles et met en place un affichage responsive
   */
  ngOnInit(): void {
    this.width = window.innerWidth;
    this.getConsoles()
    if (window.innerWidth > 1450) {
      this.breakpoint = 3;
    } else if (window.innerWidth <= 1450 && window.innerWidth > 960) {
      this.breakpoint = 2;
    } else if (window.innerWidth <= 960 && window.innerWidth > 600) {
      this.breakpoint = 1;
    }
  }

  /**
   * Évènement de redimensionnement
   * Permet d'obtenir un comportement responsive de la grille
   * @param event 
   */
  onResize(event) {
    this.width = window.innerWidth;
    if (window.innerWidth > 1450) {
      this.breakpoint = 3;
    } else if (window.innerWidth <= 1450 && window.innerWidth > 960) {
      this.breakpoint = 2;
    } else if (window.innerWidth <= 960) {
      this.breakpoint = 1;
    }
  }

  /**
   * Obtient toutes les consoles
   */
  getConsoles() {
    this.consolesAny = [];
    this.consoleservice.getConsoles().then((response: any) => {
      this.consolesAny = response.map((ev) => {
        ev.body = ev;
        return ev;
      });
    });
  }

  /**
   * Supprime la console en base qui possède l'ID en paramètre
   * @param id ID d'une console en base de données
   * TODO : Nice to have : Une popup yesno pour valider la suppression
   */
  async deleteConsole(id) {
    this.consolesAny = [];
    await this.consoleservice.deleteConsole(id);
    this.getConsoles();
    console.log(this.consolesAny);
  }

  /**
   * Ouvre une dialogue pour modifier la console sélectionnée
   * @param console Objet de type Console à modifier
   */
  openEditDialog(console): void {
    const dialogRef = this.dialog.open(AddconsoledialogComponent, {
      width: '60em',
      data: { data: console }
    });
    dialogRef.afterClosed().subscribe(async result => {
      this.consoleToEdit = result;
      if (this.checkConsole(this.consoleToEdit)) {
        this.consolesAny = [];
        let response = await this.consoleservice.updateConsole(this.consoleToEdit);
        console.log("Réponse après modification", response);
        this.getConsoles();
        this.snackBar.open("Console modifiée avec succès", "Ok", {
          duration: 2000
        });
      } else {
        this.snackBar.open("La console n'a pas été modifiée", "Ok", {
          duration: 2000
        });
      }
    });
  }

  /**
   * Ouvre une dialogue permettant à l'utilisateur de créer sa console
   */
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddconsoledialogComponent, {
      width: '60em',
      data: { console: this.console }
    });
    dialogRef.afterClosed().subscribe(async result => {
      this.console = result;
      if (this.checkConsole(this.console)) {
        this.consolesAny = [];
        let response = await this.consoleservice.createConsole(this.console);
        console.log("Réponse après création", response);
        this.getConsoles();
        this.snackBar.open("Console créée avec succès", "Ok", {
          duration: 2000
        });
      } else {
        this.snackBar.open("La console n'a pas été créée", "Ok", {
          duration: 2000
        });
      }
    });
  }

  /**
   * Vérifie si la console en paramètres est bien formée
   * @param console objet de type Console à vérifier
   */
  checkConsole(console): boolean {
    if (typeof console != 'undefined' && console) {
      return true;
    }

    return false;
  }
}
