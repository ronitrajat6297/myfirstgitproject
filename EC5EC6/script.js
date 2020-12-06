const player='Bobby';
let exp =100;
let res = false;

if (exp> 90) {
	let res= true;

}

//************************************
///Destructuring
const obj={
	player='Bobby',
	experience=100,
	wizardLevel= false
}

const player=obj.player;
const experience=obj.experience;
const wizardLevel=obj.wizardLevel;

//or

const {player, experience}= obj;

console.log(player);


//******************************************
///Template string, above the tab key =``
const name='Sally;'
const age=20;
const pet='dog';


const greetings=`Happy birth's day to you!,${name},you seems to be ${age}, what a lovely pet ${pet}`;

//****************************
//Default argument

function greet(name='', age=30,pet='dog') {

	return greetings=`Happy birth's day to you!,${name},you seems to be ${age}, what a lovely pet ${pet}`;
}

//*******************************
// Symbol - use for unique type

var sym1= Symbol{};
var sysm2=Symbol('foo');


////************************************
// Lamda -- arrow function

const add= (a,b) => a+b;

const add= (a,b) => (return a+b};

