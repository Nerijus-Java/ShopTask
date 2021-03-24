

function handleAddToCart(p){
    let CART = JSON.parse(localStorage.getItem('CART'));
    
    if(!CART){
        CART = [];
        localStorage.setItem('CART', JSON.stringify(CART));
    }

    let existingProduct = CART.find(x => x.id === p.id);
    if(existingProduct){
        existingProduct.quantity++;
    } else {
        let orderLine = JSON.parse(JSON.stringify(p));
        orderLine.quantity = 1;
        CART.push(orderLine);
    }

    localStorage.setItem('CART', JSON.stringify(CART));
}
























function checkCradentials(username , password){ 
    let user = 'arnold';
    let pass = 'test';

    if(user === username && password === pass){
        return true;
    } else {
        return false;
    }
     //todo add checking logic    
}
