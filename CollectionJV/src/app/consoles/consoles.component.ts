import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Console } from '../console';
import { AddconsoledialogComponent } from '../addconsoledialog/addconsoledialog.component'
import { ConsoleserviceService } from '../consoleservice.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { HostListener } from "@angular/core";
import { EditconsoledialogComponent } from '../editconsoledialog/editconsoledialog.component';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {
  width: number;
  console: Console;
  consoleToEdit: Console;
  consolesAny: Console[] = [];
  breakpoint: number;

  constructor(public dialog: MatDialog, private consoleservice: ConsoleserviceService, private snackBar: MatSnackBar) { }

  /**
   * Lancement de la page
   * Obtient toutes les consoles et met en place un affichage responsive
   */
  async ngOnInit() {
    this.width = window.innerWidth;
    await this.getConsoles();
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
  async getConsoles() {
    this.consolesAny = [];
    this.consoleservice.getConsoles().then((response: any) => {
      response.forEach(element => {
        const console: Console = {
          id: element.console_id,
          nom: element.console_nom,
          constructeur: element.console_constructeur,
          developpeur: element.console_developpeur,
          dureeDeVie: element.console_dureedevie,
          nbVendues: element.console_unitesvendues,
          bits: element.console_bits,
          meilleureVente: element.console_meilleurevente,
          image: element.console_image,
        }

        this.consolesAny.push(console);
      });
    });
  }

  /**
   * Supprime la console en base qui possède l'ID en paramètre
   * @param id ID d'une console en base de données
   * TODO : Nice to have : Une popup yesno pour valider la suppression
   */
  async deleteConsole(id) {
    await this.consoleservice.deleteConsole(id);
    this.getConsoles();
    console.log(this.consolesAny);
  }

  /**
   * Ouvre une dialogue pour modifier la console sélectionnée
   * @param console Objet de type Console à modifier
   */
  openEditDialog(console): void {
    const dialogRef = this.dialog.open(EditconsoledialogComponent, {
      width: '60em',
      data: console
    });
    dialogRef.afterClosed().subscribe(async result => {
      let cons = result;
      if (this.checkConsole(cons)) {
        let response = await this.consoleservice.updateConsole(cons);
        this.consolesAny = [];
        this.getConsoles();
        this.snackBar.open("Console modifiée avec succès", "Ok", {
          duration: 2000
        });
      } else {
        this.getConsoles();
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
