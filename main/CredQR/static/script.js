function validateForm() {
    let cardNumber = document.forms["form"]["cnumber"].value;
    let securityCode = document.forms["form"]["scode"].value;
    let cardType = document.forms["form"]["ctype"].value;

    // validate card number
    switch (cardType) {
        case "visa":
            if (cardNumber.match(/^4[0-9]{12}(?:[0-9]{3})?$/g) == null) {
                alert("Card number doesn't match VISA Format.");
                return false;
            }
            break;
        case "discover":
            if (cardNumber.match(/^6(?:011|5[0-9]{2})[0-9]{12}$/g) == null) {
                alert("Card number doesn't match Discover Format.");
                return false;
            }
            break;
        case "americanexpress":
            if (cardNumber.match(/^3[47][0-9]{13}$/g) == null) {
                alert("Card number doesn't match American Express Format.");
                return false;
            }
            break;
        case "mastercard":
            if (cardNumber.match(/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/g) == null) {
                alert("Card number doesn't match MasterCard Format.");
                return false;
            }
            break;
    }
    
    // validate security code
    if (securityCode.match(/^\d{3}$/g) == null) {
        alert("Security code is not three digits.");
        return false;
    }

    return true;
}