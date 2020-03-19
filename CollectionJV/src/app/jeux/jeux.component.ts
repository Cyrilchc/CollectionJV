import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jeu } from '../jeu'
import { AddjeudialogComponent } from '../addjeudialog/addjeudialog.component';
import { JeuserviceService } from '../jeuservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HostListener } from "@angular/core";
import { EditjeudialogComponent } from '../editjeudialog/editjeudialog.component';
import { YesnodialogComponent } from '../yesnodialog/yesnodialog.component';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  width: number;
  jeu: Jeu;
  jeuToEdit: Jeu;
  jeuAny: any[] = [];
  constructor(public dialog: MatDialog, private jeuservice: JeuserviceService, private snackBar: MatSnackBar) { }
  breakpoint: number;

  /**
   * Lancement de la page
   * Obtient tous les jeux et met en place un affichage responsive
   */
  ngOnInit(): void {
    this.width = window.innerWidth;
    this.getjeux()
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
   * Obtient tous les jeux
   */
  async getjeux() {
    this.jeuAny = [];
    this.jeuservice.getjeux().then((response: any) => {
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
        this.jeuAny.push(jeu);
      });
    });
  }

  /**
   * Supprime le jeu en base qui possède l'ID en paramètre
   * @param id ID d'un jeu en base de données
   * TODO : Nice to have : Une popup yesno pour valider la suppression
   */
  async deletejeu(id) {
    const dialogRef = this.dialog.open(YesnodialogComponent, {
      width: '60em',
      data: true
    });
    dialogRef.afterClosed().subscribe(async result => {
      let yesno = result;
      if (yesno == true) {
        this.jeuAny = [];
        await this.jeuservice.deletejeu(id);
        this.getjeux();
      }
    });
  }

  /**
 * Ouvre une dialogue pour modifier le jeu sélectionnée
 * @param jeu Objet de type jeu à modifier
 */
  openEditDialog(jeu): void {
    const dialogRef = this.dialog.open(EditjeudialogComponent, {
      width: '60em',
      data: jeu
    });
    dialogRef.afterClosed().subscribe(async result => {
      let game = result;
      if (this.checkjeu(game)) {
        this.jeuAny = [];
        let response = await this.jeuservice.updatejeu(game);
        this.jeuAny = [];
        this.getjeux();
        this.snackBar.open("jeu modifiée avec succès", "Ok", {
          duration: 2000
        });
      } else {
        this.getjeux();
        this.snackBar.open("Le jeu n'a pas été modifiée", "Ok", {
          duration: 2000
        });
      }
    });
  }

  /**
 * Ouvre une dialogue permettant à l'utilisateur de créer son jeu
 */
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddjeudialogComponent, {
      width: '60em',
      data: { jeu: this.jeu }
    });

    dialogRef.afterClosed().subscribe(async result => {
      this.jeu = result;
      if (this.checkjeu(this.jeu)) {
        this.jeuAny = [];
        let response = await this.jeuservice.createJeu(this.jeu);
        console.log("Réponse après création", response);
        this.getjeux();
        this.snackBar.open("jeu créée avec succès", "Ok", {
          duration: 2000
        });
      } else {
        this.snackBar.open("Le jeu n'a pas été créée", "Ok", {
          duration: 2000
        });
      }
    });
  }

  /**
   * Vérifie si le jeu en paramètres est bien formée
   * @param jeu objet de type jeu à vérifier
   */
  checkjeu(jeu): boolean {
    if (typeof jeu != 'undefined' && jeu) {
      return true;
    }

    return false;
  }
}