import { Commande } from "./commande.model";
import { Paysans } from "./paysan.model";
import { Produit } from "./produit.model";
import { Unite } from "./unite.model";

class Panier {
    id?: number;
    unite?: Unite;
    quantiteAchete?: number;
    montant?: number;
    etat?: boolean;
    paysans?: Paysans;
    produit?: Produit;
    commandes?: Commande[];
}

export {Panier};