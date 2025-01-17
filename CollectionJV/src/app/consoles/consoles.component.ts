import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Console } from '../console';
import { Jeu } from '../jeu';
import { AddconsoledialogComponent } from '../addconsoledialog/addconsoledialog.component'
import { ConsoleserviceService } from '../consoleservice.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { HostListener } from "@angular/core";
import { EditconsoledialogComponent } from '../editconsoledialog/editconsoledialog.component';
import { YesnodialogComponent } from '../yesnodialog/yesnodialog.component';
import { DisplayJeuxComponent } from '../display-jeux/display-jeux.component';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {
  console: Console;
  consoleToEdit: Console;
  consolesAny: Console[] = [];
  jeuxTodisplay: Jeu[] = [];
  breakpoint: number;
  isLoading: boolean = false;

  constructor(public dialog: MatDialog, private consoleservice: ConsoleserviceService, private snackBar: MatSnackBar) { }

  /**
   * Lancement de la page
   * Obtient toutes les consoles et met en place un affichage responsive
   */
  async ngOnInit() {
    this.isLoading = true;
    await this.getConsoles();
    this.isLoading = false;
    if (window.innerWidth > 1450) {
      this.breakpoint = 3;
    } else if (window.innerWidth <= 1450 && window.innerWidth > 960) {
      this.breakpoint = 2;
    } else if (window.innerWidth <= 960 && window.innerWidth > 600) {
      this.breakpoint = 1;
    }

    (<HTMLInputElement>document.getElementById("searchString")).focus();
  }

  /**
   * Évènement de redimensionnement
   * Permet d'obtenir un comportement responsive de la grille
   * @param event 
   */
  onResize(event) {
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
    this.isLoading = true;
    await this.delay(700);
    await this.consoleservice.getConsoles().then((response: any) => {
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
      this.isLoading = false;
    });
  }

  /**
   * Recherche des consoles avec le paramètre
   */
  async searchConsoles(searchString: string) {
    this.consolesAny = [];
    this.isLoading = true;
    await this.delay(700);
    await this.consoleservice.searchConsoles(searchString).then((response: any) => {
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
      this.isLoading = false;
    });
  }

  /**
   * Supprime la console en base qui possède l'ID en paramètre
   * @param id ID d'une console en base de données
   * TODO : Nice to have : Une popup yesno pour valider la suppression
   */
  async deleteConsole(id) {
    const dialogRef = this.dialog.open(YesnodialogComponent, {
      width: '60em',
      data: true
    });
    dialogRef.afterClosed().subscribe(async result => {
      let yesno = result;
      if (yesno == true) {
        this.isLoading = true;
        await this.consoleservice.deleteConsole(id);
        await this.getConsoles();
        this.isLoading = false;
        console.log(this.consolesAny);
      }
    });
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
        this.isLoading = true;
        let response = await this.consoleservice.updateConsole(cons);
        this.consolesAny = [];
        await this.getConsoles();
        this.isLoading = false;
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
   * Recherche les jeux dont la plateforme est la console sélectionnée
   * @param plateforme Plateforme à rechercher
   */
  async displayGames(plateforme) {
    this.jeuxTodisplay = [];
    this.isLoading = true;
    await this.delay(700);
    await this.consoleservice.getJeuxLike(plateforme).then((response: any) => {
      response.forEach(element => {
        const jeu: Jeu = {
          id: element.jeu_id,
          nom: element.jeu_nom,
          jaquette: element.jeu_presencejaquette,
          fonctionnel: element.jeu_fonctionnel,
          note: element.jeu_note,
          valeur: element.jeu_valeurestimee,
          developpeur: element.jeu_developpeur,
          editeur: element.jeu_editeur,
          multijoueur: element.jeu_estmultijoueur,
          image: element.jeu_image,
          plateformes: element.jeu_plateformes,
          genre: element.jeu_genre
        }

        this.jeuxTodisplay.push(jeu);
      });

      this.isLoading = false;
    });

    console.log(this.jeuxTodisplay);
    const dialogRef = this.dialog.open(DisplayJeuxComponent, {
      width: '40em',
      data: this.jeuxTodisplay
    });
    dialogRef.afterClosed().subscribe(async result => {
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
        this.isLoading = true;
        let response = await this.consoleservice.createConsole(this.console);
        await this.getConsoles();
        this.isLoading = false;
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
   * Effectue une recherche sur les consoles
   */
  async search() {
    let searchString = (<HTMLInputElement>document.getElementById("searchString")).value;
    if (searchString != "") {
      await this.searchConsoles(searchString);
    } else {
      await this.getConsoles();
    }
  }

  /**
   * Si l'événement keydown est lancé avec la touche entrée, on lance la recherche
   * @param event Évènement touche enfoncée
   */
  onKeydown(event) {
    if (event.key === "Enter") {
      this.search();
    }
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

  /**
   * Impose un délai dont la longueur est donnée en paramètres
   * @param ms Temps à attendre
   */
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
