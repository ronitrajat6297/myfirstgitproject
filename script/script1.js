var database=[
{
	username:"asim",
	password:"super"
},
{
	username:"ronit",
	password:"123"
},
{
	username:"rajat",
	password:"123"
}
];

var newsFeed=[
	{
		username:"rajat",
		timeline:"So tired to work!"
	},

	{
		username:"ronit",
		timeline:"Javascript is so cool"
	}
];

var userNamePrompt=prompt("What is your username?");
var passwordPrompt=prompt("What is your password?");

function isUserValid(user, pass) {
	
	for (var i =0; i< database.length; i++) {
		console.log("username: "+user);
	    console.log("password: "+pass);

	    console.log("database username: "+database[i].username);
	    console.log("database password: "+database[i].password);

		if(database[i].username===user && database[i].password===pass)
		{			
			return true;
		}		
	}	
	return false;
};

function signIn(user, pass){
		console.log(isUserValid(user, pass));

};

signIn(userNamePrompt, passwordPrompt);