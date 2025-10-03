import { useState } from "react";
import useCardStore from "../store/card-store";
import Thanks from "./thanks.jsx";
import {
    formatCardNumber,
    luhnCheck,
    formatExpiryMonth,
    formatExpiryYear,
    isExpiryValid,
    formatCVC,
} from "../utils/card-utils";

function CardForm() {
    const cardDetails = useCardStore();
    const [showThanks, setShowThanks] = useState(false);
    const [errors, setErrors] = useState({});

    function validateAll() {
        const newErrors = {};
        const numberOk = luhnCheck(cardDetails.cardNumber);
        if (!numberOk) newErrors.cardNumber = "Invalid card number";
        if (
            !cardDetails.cardHolderName ||
            !/^[a-zA-Z -]+$/.test(cardDetails.cardHolderName)
        )
            newErrors.cardHolderName = "Invalid name";
        if (!isExpiryValid(cardDetails.expiryMonth, cardDetails.expiryYear))
            newErrors.expiry = "Invalid expiry";
        if (!/^\d{3}$/.test(String(cardDetails.cvv || "")))
            newErrors.cvc = "Invalid CVC";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validateAll()) {
            setShowThanks(true);
        }
    }

    return (
        <div className="CardForm">
            <div className="CardForm-container">
                <div className="CardForm-wrapper">
                    {!showThanks && (
                        <form onSubmit={handleSubmit} noValidate>
                            <label htmlFor="cardholderName">
                                Cardholder Name
                            </label>
                            <input
                                id="cardholderName"
                                name="cardholderName"
                                type="text"
                                className="CardForm-name"
                                placeholder="e.g. Jane Appleseed"
                                value={cardDetails.cardHolderName}
                                onChange={(e) =>
                                    cardDetails.setCardName(e.target.value)
                                }
                                aria-invalid={Boolean(errors.cardHolderName)}
                            />
                            {errors.cardHolderName && (
                                <p className="ErrorMessage">
                                    {errors.cardHolderName}
                                </p>
                            )}

                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                id="cardNumber"
                                name="cardNumber"
                                type="tel"
                                inputMode="numeric"
                                className="CardForm-number"
                                placeholder="e.g. 1234 5678 9123 0000"
                                value={formatCardNumber(cardDetails.cardNumber)}
                                onChange={(e) =>
                                    cardDetails.setCardNumber(e.target.value)
                                }
                                maxLength={19}
                                aria-invalid={Boolean(errors.cardNumber)}
                            />
                            {errors.cardNumber && (
                                <p className="ErrorMessage">
                                    {errors.cardNumber}
                                </p>
                            )}

                            <div className="CardForm-expiry-cvc-wrapper">
                                <div className="CardForm-expiry-wrapper">
                                    <label>Exp. Date (MM/YY)</label>
                                    <div>
                                        <input
                                            name="expiryMonth"
                                            type="tel"
                                            inputMode="numeric"
                                            className="CardFrom-expiry-month"
                                            placeholder="MM"
                                            value={cardDetails.expiryMonth}
                                            onChange={(e) =>
                                                cardDetails.setExpiryMonth(
                                                    (e.target.value || "")
                                                        .replace(/\D+/g, "")
                                                        .slice(0, 2)
                                                )
                                            }
                                            maxLength={2}
                                            aria-invalid={Boolean(
                                                errors.expiry
                                            )}
                                        />
                                        <input
                                            name="expiryYear"
                                            type="tel"
                                            inputMode="numeric"
                                            className="CardFrom-expiry-year"
                                            placeholder="YY"
                                            value={cardDetails.expiryYear}
                                            onChange={(e) =>
                                                cardDetails.setExpiryYear(
                                                    (e.target.value || "")
                                                        .replace(/\D+/g, "")
                                                        .slice(0, 2)
                                                )
                                            }
                                            maxLength={2}
                                            aria-invalid={Boolean(
                                                errors.expiry
                                            )}
                                        />
                                    </div>
                                    {errors.expiry && (
                                        <p className="ErrorMessage">
                                            {errors.expiry}
                                        </p>
                                    )}
                                </div>
                                <div className="CardForm-cvc-wrapper">
                                    <label htmlFor="cvc">CVC</label>
                                    <input
                                        id="cvc"
                                        name="cvc"
                                        type="tel"
                                        inputMode="numeric"
                                        className="CardForm-cvc"
                                        placeholder="e.g 123"
                                        value={formatCVC(cardDetails.cvv)}
                                        onChange={(e) =>
                                            cardDetails.setCvv(e.target.value)
                                        }
                                        maxLength={3}
                                        aria-invalid={Boolean(errors.cvc)}
                                    />
                                    {errors.cvc && (
                                        <p className="ErrorMessage">
                                            {errors.cvc}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <button className="CardForm-btn" type="submit">
                                Confirm
                            </button>
                        </form>
                    )}
                    {showThanks && (
                        <Thanks onReset={() => setShowThanks(false)} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardForm;
