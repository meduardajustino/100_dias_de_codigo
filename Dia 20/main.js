function initPayPalButton() {
    paypal.Buttons({
        style: {
            shape: 'rect', 
            color: 'gold',
            layout: 'vertical',
            label: 'paypal',
        },

        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{"amount": {"currency_code": "USD", "value":}}]
            });
        },

        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                const element = document.getElementById('paypal-button-container');
                element.innerHTML = ''; 
                element.innerHTML = '<h3>Thank you for your payment!</h3>';
            });
        },

        onError: function(err) {
            console.log(err);
        }
    }).render('#paypal-button-container');
}
initPayPalButton();
