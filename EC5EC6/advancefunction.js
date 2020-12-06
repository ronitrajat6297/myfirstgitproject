//###################
//Closures --one time execution
const first=() =>{
	const greet= 'Hi';
	const second=(){
		alert(greet);
	}
	return second;
}

const newFunc =first();
newFunc();

//####################################
//currying
// two function (a), (b)
const multifly=(a,b) =>(a *b);
const curriedMultifly = (a) =>(b) =>a * b;
curriedMultifly(3)(4)

//#############################
//Compose
const compose= (f,g) => (a) => f(7);
const sum = (num) => num * 1;
compose(sum,sum(5));
///

///##########################
// avoid side effect and functional purity

