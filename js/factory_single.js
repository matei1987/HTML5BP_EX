//FACTORY SETUP

function Create_a(options) { //FACTORY OBJECT METHOD TO CREATE A CAR OBJECT
	var link = document.createElement('a');
	link.href = options.href;
	link.id = options.id;
	link.className = options.className;
	link.textContent = options.textContent;
}


function Create_img(options) { //FACTORY OBJECT METHOD TO CREATE A TRUCK OBJECT
	var pic = document.createElement('img');
	pic.src = options.src;
	pic.id = options.id;
	pic.className = options.className;
	pic.textContent = options.textContent;
}

function Create_div(options) { //FACTORY OBJECT METHOD TO CREATE A BOAT OBJECT
	var div = document.createElement('div');
	div.src = options.src;
	div.id = options.id;
	div.className = options.className;
	div.textContent = options.textContent;
}


function ElementFactory() {} //CREATING THE EMPTY CLASS ElementFactory
ElementFactory.prototype.createElements = function(options) { //PROTOTYPING THE createElements METHOD OF THE ElementFactory CLASS TO A FUNCTION THAT RETURN A NEW OBJECT
	switch(options.elementType) {
	case 'a':
		return new Create_a(options);
	case 'img':
		return new Create_img(options);
	case 'div':
		return new Create_div(options);
	default:
		console.log(options.vehicleType + " is not a valid element");
	}

};



//SINGLETON IMPLEMENTATION
var instance; //GLOBAL VARIABLE USED TO TRACK INSTANCE
var ElementFactorySingleton = function() {


		function init() { //FUNCTION USED TO INITIALIZE AN INSTANCE OF THE VEHICLE FACTORY
			return new ElementFactory();

		}

		if(typeof instance === "undefined") { //CHECKING IF AN OBJECT OF TYPE VEHICLE FACTORY HAS BEEN INSTANTIATED
			instance = init(); //CALLING INIT() IF NO INSTANCE IS DETECTED
		}

		return instance; //RETURNING EITHER THE NEW OR EXISTING INSTANCE
	};


//USAGE

var outputFactory = ElementFactorySingleton(); //CREATING A NEW ElementFactory OBJECT - USED FOR VALIDATION OF SINGLETON
var outputFactory2 = ElementFactorySingleton(); //USED FOR VALIDATION OF SINGLETON
var a = outputFactory.createElements({
	elementType: "a",
	href: "http://www.google.com",
	id: "goole_link",
	className: "links"
});

var div = outputFactory.createElements({
	elementType: "div",
	id: "container",
	className: "clearfix",
	textContent: "This is the world as we know it"
});

var img = outputFactory.createElements({
	elementType: "img",
	id: "nick_cage",
	className: "pics",
	textContent: "The One True God",
	src: "http://ia.media-imdb.com/images/M/MV5BMTUzMDM4Nzk2MV5BMl5BanBnXkFtZTcwNTcwNjExOQ@@._V1._SY314_CR0,0,214,314_.jpg"

});

var img_misspelled = outputFactory.createElements({
	elementType: "imd", // Misspleled 
	id: "nick_cage",
	className: "pics",
	textContent: "The One True God",
	src: "http://ia.media-imdb.com/images/M/MV5BMTUzMDM4Nzk2MV5BMl5BanBnXkFtZTcwNTcwNjExOQ@@._V1._SY314_CR0,0,214,314_.jpg"

});

console.log(a instanceof Create_a); //TRUE

console.log(div instanceof Create_div); //TRUE

console.log(img instanceof Create_img); //TRUE

console.log(img_misspelled instanceof Create_img); //FALSE - wrong vehicle type

console.log((outputFactory === outputFactory2) + " -- SINGLETON success"); //TRUE - The two variables point to the same object in memory.

console.log(a);
console.log(div);
console.log(img);
console.log(img_misspelled);