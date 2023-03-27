import image1 from "../images/image1.png";
import image5 from "../images/image5.png";
import image4 from "../images/image4.png";
import image3 from "../images/image3.png";
import image2 from "../images/image2.png";
export const Produit = function () {
    return (
        <div id="block3">

            <div className="produit">
                <div className="img">
                    <img className="img1" src={image2} alt="logo"/>
                </div>
                <div className="descript">
                    <h2>produit 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa, deserunt eius
                        eveniet fuga in minus molestiae natus officiis pariatur quidem repudiandae, rerum unde. Atque
                        exercitationem illo optio recusandae velit!
                    </p>
                </div>
                <div className="quantitySelector">
                    <input type="number"/>
                    <h2>230 €</h2>
                </div>
            </div>
            <div className="produit">
                <div className="img">
                    <img className="img1" src={image3} alt="logo"/>
                </div>
                <div className="descript">
                    <h2>produit 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa, deserunt eius
                        eveniet fuga in minus molestiae natus officiis pariatur quidem repudiandae, rerum unde. Atque
                        exercitationem illo optio recusandae velit!
                    </p>
                </div>
                <div className="quantitySelector">
                    <input type="number"/>
                    <h2>230 €</h2>
                </div>
            </div>
            <div className="produit">
                <div className="img">
                    <img className="img1" src={image4} alt="logo"/>
                </div>
                <div className="descript">
                    <h2>produit 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa, deserunt eius
                        eveniet fuga in minus molestiae natus officiis pariatur quidem repudiandae, rerum unde. Atque
                        exercitationem illo optio recusandae velit!
                    </p>
                </div>
                <div className="quantitySelector">
                    <input type="number"/>
                    <h2>230 €</h2>
                </div>
            </div>
            <div className="produit">
                <div className="img">
                    <img className="img1" src={image5} alt="logo"/>
                </div>
                <div className="descript">
                    <h2>produit 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa, deserunt eius
                        eveniet fuga in minus molestiae natus officiis pariatur quidem repudiandae, rerum unde. Atque
                        exercitationem illo optio recusandae velit!
                    </p>
                </div>
                <div className="quantitySelector">
                    <input type="number"/>
                    <h2>230 €</h2>
                </div>
            </div>
        </div>
    );
};

let product = [
    {id:1, name: "produit1", image: image1}
]