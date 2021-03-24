let CART;

$(document).ready(function (){
    CART = JSON.parse(localStorage.getItem('CART'));
    if(!CART){
        CART = [];
        localStorage.setItem('CART', JSON.stringify(CART));
    }
    displayCart();
});


function displayCart(){
    let h = '';
    CART.forEach(x => {
       h+= `
        <div>
            <h5>${x.title} [${x.quantity}]</h5>
        </div>
        `;
    });
    $("#orderLines").html(h);
}