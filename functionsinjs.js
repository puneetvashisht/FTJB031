var outer  = function(){
    var x = 2;
    var inner = function(){
        console.log(x + 2)
        var x = 3
    }
    return inner;
}

console.log(outer()())


Phase 1: Lexical Scope Creation
    outer: x:undefined, inner:undefined
    inner: x: undefined

Phase 2: Execution
    outer: x:2, inner:fn
    inner: x: 


// var fn = outer();
// console.log(fn())