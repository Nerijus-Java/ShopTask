// get products
// get cart / order lines

function getProducts(){
    return [];
}

function getCart(){
    return [];
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
