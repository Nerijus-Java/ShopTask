let CART;

$(document).ready(function () {
    CART = JSON.parse(localStorage.getItem('CART'));
    if (!CART) {
        CART = [];
        localStorage.setItem('CART', JSON.stringify(CART));
    }
    displayCart();
});


function displayCart() {
    let h = '';
    CART.forEach(x => {
    
        let totalprice = parseInt(x.price) * x.quantity;
        h += `
        <div>
            <h5>Title: ${x.title} | Amount: ${x.quantity} | Price :${totalprice}</h5>
        </div>
        `;
    });
    $("#orderLines").html(h);
}