// Advance array
const array=[1,4,8,16,32];
const double =[];
const newArray=array.forEach((num)=>
			{
				double.push(num * 2);

			});
console.log(double);


//###################
//map, filter, reduce
const mapArray=array.map((num)=>
{
	return num*2;
	
});
console.log(mapArray);
//can be written as
const mapArray=array.map(num=> num * 2);

///filter
const newFilter = array.filter(num => {
	return num > 5;
});
console.log(newFilter);
//can be written as
const newFilter = array.filter(num => num > 5);

/// Reduce
//0 is accumulator value
const reduceArray= array.reduce((accumulator, num)=>
{
	return accumulator + num;
}, 0
	);

console.log(reduceArray);