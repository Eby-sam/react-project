import {Panier} from "./panier";
import {Categorie} from "./categorie";
import {Produit} from "./produit";

export const Body = function () {
    return (
        <div id="containerB">
            <Panier/>
            <Categorie/>
            <Produit/>
        </div>
    );
};

export default Body;