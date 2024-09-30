class Cart {
    constructor(products){
        this.products = products;
        this.total = 0;
    }

    addProduct(product){
        this.products.push(product)
        this.total += this.product.price 
    }

    removeProduct(product){
        let index = this.products.findIndex
        this.products.splice(product[i],1)
        this.total -= this.product.price 
    }
}
module.exports = Cart 
