import { Caractproduit } from "./caractproduit.model";
import { Categorie } from "./categorie.model";
import { Panier} from "./panier.model";

class Produit{
    id?: number;
    nomProduit?: string;
    description?: string;
    prixKg?: number;
    prixSac50Kg?: number;
    prixSac100kg?: number;
    photo?: string;
    quantite?: number;
    etat?: boolean;
    categorie?: any;
    paniers?: Panier;
    cproduit?: Caractproduit;
    uniteProd?: string
}

export {Produit};