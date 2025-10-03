import cardLogo from "../assets/images/card-logo.svg";
import creditCardBack from "../assets/images/bg-card-back.png";
import creditCardFront from "../assets/images/bg-card-front.png";
import useCardStore from "../store/card-store";
import { formatCardNumber } from "../utils/card-utils";

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
                            <p>
                                {formatCardNumber(cardDetails.cardNumber) ||
                                    "0000 0000 0000 0000"}
                            </p>
                        </div>
                        <div className="Card-name-date">
                            <p className="Card-name">
                                {cardDetails.cardHolderName || "Jane Appleseed"}
                            </p>
                            <p className="Card-date">
                                {cardDetails.expiryMonth || "00"}/
                                {cardDetails.expiryYear || "00"}
                            </p>
                        </div>
                        <img
                            src={creditCardFront}
                            alt="Credit Card Frontside"
                        />
                    </div>
                    <div className="Card-back">
                        <img src={creditCardBack} alt="Credit Card Backside" />
                        <p className="Card-csv-number">
                            {cardDetails.cvv || "000"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
