const Customer = require('./Customer')
class Auth{
    constructor(){
        this.customers = []
    }

    register(name, email,shippingAddress){
        let customer = new Customer(name, email, shippingAddress);
        console.log(customer, '<<<new');
        
        this.customers.push(customer)
    }

    login(email){
       let _customer = ''
       this.customers.forEach(customer => {
            if(customer.email == email){
                _customer  = customer;
            }else{
                _customer  = null;
            }
        })
        return _customer;
    }
}



module.exports = Auth;