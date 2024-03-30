function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    
    const paymentOptions = document.getElementById('paymentOptions');
    paymentOptions.innerHTML = `
        <div class="payment-option" onclick="selectPayment('creditCard')">
            <i class="far fa-credit-card"></i> Credit Card
        </div>
        <div class="payment-option" onclick="selectPayment('paypal')">
            <i class="fab fa-paypal"></i> PayPal
        </div>
    `;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function selectPayment(paymentMethod) {
    alert(`Selected Payment Method: ${paymentMethod}`);
}
