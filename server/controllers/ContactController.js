let contacts = require("../contacts");
let contactCount = contacts.length;


module.exports.list =  function list(request, response) {
    return response.json(contacts);
   }
   module.exports.show =  function show(request, response) {
    let contact = contacts.find((id) => id._id == request.params.id);
    response.json(contact);
   }
   module.exports.create =  function create(request, response) {
    request.body._id = contactCount + 1;   
    contacts.push(request.body);
    contactCount++;
    response.json(request.body);    
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }
   