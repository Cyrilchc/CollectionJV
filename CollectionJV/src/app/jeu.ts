export interface Jeu {
    id: number;
    nom : string;
    jaquette : boolean;
    fonctionnel  : boolean;
    note : number;
    valeur : number;
    developpeur : string;
    editeur : string;
    genre : string;
    sortie : Date;
    multijoueur : boolean;
    image: string,
    plateformes: string,
}

