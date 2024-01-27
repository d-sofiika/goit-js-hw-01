function getShippingMessage(country, price, deliveryFree){
    const totalPrice = price + deliveryFree;
    return `Shipping to ${country} will cost ${totalPrice} credits`
};

getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);


