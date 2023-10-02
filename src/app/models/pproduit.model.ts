import { Paquet } from "./paquet";
import { Produit } from "./produit.model";

export class Paquetproduit{
    id!: string;
    paquet!: Paquet;
    produit!: Produit;
    quantite!: number;
}