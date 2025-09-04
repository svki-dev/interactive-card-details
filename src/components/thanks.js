import complete from "../assets/images/icon-complete.svg";

function Thanks() {
    return (
        <div className="Thanks form_hide">
            <img src={complete} alt="Credit Card Logo" />
            <h1>Thank you!</h1>
            <p>We´ve added your card details</p>
            <button className="ThanskBtn" onClick={() => window.location.reload()}>Continue</button>
        </div>
    );
}

export default Thanks;