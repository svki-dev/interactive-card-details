import useCardStore from "../store/card-store";
import Thanks from "./thanks";

function CardForm() {
    const cardDetails = useCardStore();
    function handleSubmit(e) {
        e.preventDefault();
        const form = document.querySelector(".CardForm form");
        const thanks = document.querySelector(".Thanks");
        form.classList.add("form_hide");
        thanks.classList.remove("form_hide");
    }
    return (
        <div className="CardForm">
            <div className="CardForm-container">
                <div className="CardForm-wrapper">
                    <form onSubmit={handleSubmit}>
                        <label>Cardholder Name</label>
                        <input
                            name="cardholderName"
                            type="text"
                            className="CardForm-name"
                            placeholder="e.g. Jane Appleseed"
                            pattern="[a-z A-Z-]+"
                            onChange={(e) => cardDetails.setCardName(e.target.value)}
                            required
                        />
                        <label>Card Number</label>
                        <input
                            name="cardNumber"
                            type="number"
                            className="CardForm-number"
                            placeholder="e.g. 1234567891230000"
                            pattern="\d{4} \d{4} \d{4} \d{4}"
                            maxLength="19"
                            onChange={(e) => cardDetails.setCardNumber(e.target.value)}
                            required
                        />
                        <div className="CardForm-expiry-cvc-wrapper">
                            <div className="CardForm-expiry-wrapper">
                                <label>Exp. Date (MM/YY)</label>
                                <div>
                                    <input
                                        name="expiryMonth"
                                        type="tel"
                                        className="CardFrom-expiry-month"
                                        placeholder="MM"
                                        pattern="(0[1-9]|1[0-2])"
                                        onChange={(e) => cardDetails.setExpiryMonth(e.target.value)}
                                        required
                                    />
                                    <input
                                        name="expiryYear"
                                        type="tel"
                                        className="CardFrom-expiry-year"
                                        placeholder="YY"
                                        pattern="\d{2}"
                                        onChange={(e) => cardDetails.setExpiryYear(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="CardForm-cvc-wrapper">
                                <label>CVC</label>
                                <input
                                    name="cvc"
                                    type="tel"
                                    className="CardForm-cvc"
                                    placeholder="e.g 123"
                                    pattern="\d{3}"
                                    onChange={(e) => cardDetails.setCvv(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button className="CardForm-btn" type="submit">Confirm</button>
                    </form>
                    <Thanks />
                </div>
            </div>
        </div>

    );
}

export default CardForm;
