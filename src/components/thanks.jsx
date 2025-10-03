import complete from "../assets/images/icon-complete.svg";

function Thanks({ onReset }) {
    return (
        <div className="Thanks">
            <img src={complete} alt="Credit Card Logo" />
            <h1>Thank you!</h1>
            <p>We´ve added your card details</p>
            <button className="ThanskBtn" onClick={onReset}>
                Continue
            </button>
        </div>
    );
}

export default Thanks;
