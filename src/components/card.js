import cardLogo from "../assets/images/card-logo.svg";
import creditCardBack from "../assets/images/bg-card-back.png";
import creditCardFront from "../assets/images/bg-card-front.png";
import useCardStore from "../store/card-store";

function Card() {
    const cardDetails = useCardStore();
    return (
        <div className="Card">
            <div className="Card-container">
                <div className="Card-wrapper">
                    <div className="Card-front">

                        <div className="Card-logo">
                            <img src={cardLogo} alt="Credit Card Logo" />
                        </div>
                        <div className="Card-number">
                            <p>{cardDetails.cardNumber}</p>
                        </div>
                        <div className="Card-name-date">
                            <p className="Card-name">{cardDetails.cardHolderName}</p>
                            <p className="Card-date">{cardDetails.expiryMonth}/{cardDetails.expiryYear}</p>
                        </div>
                        <img src={creditCardFront} alt="Credit Card Frontside" />
                    </div>
                    <div className="Card-back">
                        <img src={creditCardBack} alt="Credit Card Backside" />
                        <p className="Card-csv-number">{cardDetails.cvv}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Card;
