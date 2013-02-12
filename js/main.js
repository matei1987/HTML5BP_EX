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


function VehicleFactory() {} //CREATING THE EMPTY CLASS VEHICLEFACTORY
VehicleFactory.prototype.vehicleClass = Car; //PROTOTYPING THE VEHICLECLASS ATRIBUTE OF THE VEHICLEFACTORY CLASS
VehicleFactory.prototype.createVehicle = function(options) { //PROTOTYPING THE CREATEVEHICLE ATRIBUTE OF THE VEHICLEFACTORY CLASS TO A FUNCTION THAT RETURN A NEW OBJECT
	if(options.vehicleType === "car") {
		this.vehicleClass = Car;
	} else if(options.vehicleType === "truck") {
		this.vehicleClass = Truck;
	} else {
		this.vehicleClass = Boat;
	}


	return new this.vehicleClass(options);

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
	}
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

console.log(car instanceof Car);

console.log(boat instanceof Boat);

console.log(outputFactory === outputFactory2);

console.log(car);
console.log(boat);