
let PRODUCTS = [
    {
        id: 1,
        title: "Jordans",
        color: "Black",
        price: "200.00",
        size: "L"
    },
    {
        id: 2,
        title: "Jordans",
        color: "Black",
        price: "250.00",
        size: "M"
    },
    {
        id: 3,
        title: "Jordans",
        color: "Black",
        price: "150.00.00",
        size: "L"
    },
    {
        id: 4,
        title: "Jordans",
        color: "Black",
        price: "222.00",
        size: "XL"
    },
    {
        id: 5,
        title: "Jordans",
        color: "Black",
        price: "300.00",
        size: "S"
    },
    {
        id: 6,
        title: "Jordans",
        color: "Black",
        price: "175.00",
        size: "XL"
    },
    {
        id: 7,
        title: "Jordans",
        color: "Black",
        price: "245.00",
        size: "XL"
    },
    {
        id: 8,
        title: "Jordans",
        color: "Black",
        price: "275.00",
        size: "XL"
    },
];

//*functions for all pages
function addToCart(p){
    if(p){
        return handleAddToCart(p);
    }else{
        return false;
    }
}