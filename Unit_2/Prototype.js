const emp={
    calculateTax : function(){
        console.log('tax is 20%')
        return
    }
}
const sheetal = {
    salary : 20000
}
sheetal.__proto__ = emp
sheetal.calculateTax()
