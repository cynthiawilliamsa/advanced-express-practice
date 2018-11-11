let vehicles = require("../vehicles");
let vehicleCount = vehicles.length;
const vehicleModel = require("../models/vehicleModel");


module.exports.list =  function list(request, response) {
    vehicleModel.find().exec().then((vehicles)=>{
        return response.json(vehicles);
    });
   
   }
   //need to test this.
   module.exports.show =  function show(request, response) {
    vehicleModel.findById(request.params.id).exec()
    .then(vehicle => {
        response.json(vehicle);
    });
   
   }

   module.exports.create =  function create(request, response) {
    const v = new vehicleModel({
        make: request.body.make,
        model: request.body.model,
        year: request.body.year
    });
    
    v.save().then(savedUser => {
        console.log(savedUser);
    });
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }