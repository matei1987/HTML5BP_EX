//FACTORY SETUP

function Car(options) { //FACTORY OBJECT METHOD TO CREATE A CAR OBJECT
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
}


function Truck(options) { //FACTORY OBJECT METHOD TO CREATE A TRUCK OBJECT
	this.state = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color = options.color || "blue";
}

function Boat(options) { //FACTORY OBJECT METHOD TO CREATE A BOAT OBJECT
	this.engine = options.engine || "honda";
	this.state = options.state || "brand new";
	this.color = options.color || "white";
}

function Bike(options) { //FACTORY OBJECT METHOD TO CREATE A BIKE OBJECT
	this.gears = options.gears || 12;
	this.state = options.state || "new";
	this.color = options.color || "blue";
}


function VehicleFactory() {} //CREATING THE EMPTY CLASS VEHICLEFACTORY
VehicleFactory.prototype.createVehicle = function(options) { //PROTOTYPING THE CREATEVEHICLE METHOD OF THE VEHICLEFACTORY CLASS TO A FUNCTION THAT RETURN A NEW OBJECT
	switch(options.vehicleType) {
	case 'car':
		return new Car(options);
	case 'truck':
		return new Truck(options);
	case 'boat':
		return new Boat(options);
	case 'bike':
		return new Bike(options);
	default:
		console.log(options.vehicleType + " is not a valid vehicle type.");
	}

};



//SINGLETON IMPLEMENTATION
var instance; //GLOBAL VARIABLE USED TO TRACK INSTANCE
var VehicleSingleton = function() {


		function init() { //FUNCTION USED TO INITIALIZE AN INSTANCE OF THE VEHICLE FACTORY
			return new VehicleFactory();

		}

		if(typeof instance === "undefined") { //CHECKING IF AN OBJECT OF TYPE VEHICLE FACTORY HAS BEEN INSTANTIATED
			instance = init(); //CALLING INIT() IF NO INSTANCE IS DETECTED
		}

		return instance; //RETURNING EITHER THE NEW OR EXISTING INSTANCE
	};


//USAGE

var outputFactory = VehicleSingleton(); //CREATING A NEW VEHICLEFACTORY OBJECT - USED FOR VALIDATION OF SINGLETON
var outputFactory2 = VehicleSingleton(); //USED FOR VALIDATION OF SINGLETON
var car = outputFactory.createVehicle({
	vehicleType: "car",
	color: "yellow",
	doors: 6
});

var boat = outputFactory.createVehicle({
	vehicleType: "boat",
	engine: "kawasaki",
	state: "used"
});

var bike = outputFactory.createVehicle({
	vehicleType: "bike",
	gears: 10,
	color: "purple"
	

});

var pinkBike = outputFactory.createVehicle({
	vehicleType: "bIke",
	gears: 13,
	color: "pink"
	

});

console.log(car instanceof Car); //TRUE

console.log(boat instanceof Boat); //TRUE

console.log(bike instanceof Bike); //TRUE

console.log(pinkBike instanceof Bike); //FALSE - wrong vehicle type

console.log((outputFactory === outputFactory2) + " -- SINGLETON success"); //TRUE - The two variables point to the same object in memory.

console.log(car);
console.log(boat);
console.log(bike);
console.log(pinkBike);