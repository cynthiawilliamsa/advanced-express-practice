let vehicles = require("../vehicles");
let vehicleCount = vehicles.length;


module.exports.list =  function list(request, response) {
    return response.json(vehicles);
   }
   module.exports.show =  function show(request, response) {
    let vehicle = vehicles.find((id) => id._id == request.params.id);
    response.json(vehicle);
   }
   module.exports.create =  function create(request, response) {
    request.body._id = vehicleCount + 1;   
    vehicles.push(request.body);
    vehicleCount++;
    response.json(request.body);    
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }