function outerFunction(){
    var outerVariable = "Hii i am from the outer function"

function innerFunction(){
        console.log(outerVariable)
         
    }
    innerFunction()//closure
}
outerFunction()


