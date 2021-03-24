$(document).ready(function (){
    cartReady();
    displayProducts();
    displayItemAmount(); 
});


function displayProducts() {
    let h = '';
    PRODUCTS.forEach(x => {
        h += `
        <div class="card text-center  " style="width: 13.1rem; height: 18rem;">
            <div class="card-body pt-0 pr-0 pl-0">
                <img src="../img/stock.jpg" class="card-img-top productImg" alt="stock">
                <p class="card-text">${x.title}</p>
                <p class="card-text">$ ${x.price}</p>
                <button href="#" class="btn btn-primary" prod_id='${x.id}Prod'>Add to cart</button>
            </div>
        </div>
        `;
    });
    $("#Products").html(h);
}

function cartReady(){
    CART = JSON.parse(localStorage.getItem('CART'));
    if(!CART){
        CART = [];
        localStorage.setItem('CART', JSON.stringify(CART));
    }
    displayCart();
}


function displayItemAmount(){
    $("#itemAmount").text(PRODUCTS.length + " items found")
}


function displayCart(){
    $("#quantity").text(CART.length);
}
