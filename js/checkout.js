document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    const productPrice = urlParams.get('price');
    const quantity = urlParams.get('quantity');

    document.getElementById('checkout-product-details').innerText = 
        `You are buying ${quantity}x ${decodeURIComponent(productName)} for a total of ${(parseFloat(productPrice) * parseInt(quantity)).toFixed(2)}kr`;

    document.getElementById('payment-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;

        // Validate card details
        const cardType = getCardType(cardNumber);
        const isValid = validateLuhn(cardNumber);

        if (!isValid) {
            alert("Invalid credit card number!");
            return;
        }

        if (!cardType) {
            alert("Unsupported card type!");
            return;
        }

        if (!validateExpiry(expiry)) {
            alert("Invalid expiry date! Use MM/YY format.");
            return;
        }

        if (!/^\d{3,4}$/.test(cvv)) {
            alert("Invalid CVV! Must be 3 or 4 digits.");
            return;
        }

        alert(`Payment processed successfully! Card Type: ${cardType}`);
        window.location.href = "success.html";
    });

    function getCardType(number) {
        const patterns = {
            "Visa": /^4\d{12,18}$/,
            "MasterCard": /^(5[1-5]\d{14}|2[2-7]\d{14})$/,
            "American Express": /^3[47]\d{13}$/,
            "Discover": /^6(?:011|5\d{2})\d{12}$/
        };

        for (const [card, pattern] of Object.entries(patterns)) {
            if (pattern.test(number)) return card;
        }
        return null;
    }

    function validateLuhn(number) {
        let sum = 0;
        let alternate = false;
        for (let i = number.length - 1; i >= 0; i--) {
            let n = parseInt(number[i]);
            if (alternate) {
                n *= 2;
                if (n > 9) n -= 9;
            }
            sum += n;
            alternate = !alternate;
        }
        return sum % 10 === 0;
    }

    function validateExpiry(expiry) {
        const match = expiry.match(/^(\d{2})\/(\d{2})$/);
        if (!match) return false;

        const month = parseInt(match[1], 10);
        const year = parseInt(match[2], 10) + 2000;
        const now = new Date();
        const expDate = new Date(year, month);

        return month >= 1 && month <= 12 && expDate > now;
    }
});
