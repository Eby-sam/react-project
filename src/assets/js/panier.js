import trash from "../images/trash.svg";

export const Panier = function () {
    return (
        <div id="block1">
            <div id="titlePanier">
                <h2>Panier</h2>
            </div>
            <div id="totalProduit">
                <div className="prod"><img className="trash" src={trash } alt="logo"/>Produit1</div>
                <div className="prod"><img className="trash"  src={trash } alt="logo"/>Produit2</div>
                <div className="prod"><img className="trash"   src={trash } alt="logo"/>Produit3</div>
            </div>
            <div id="buttonVide">
                <button><span>0</span> €</button>
            </div>
        </div>
    );
};