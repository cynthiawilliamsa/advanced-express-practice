let contacts = require("../contacts");
let contactCount = contacts.length;
const contactModel = require("../models/contactModel");


module.exports.list =  function list(request, response) {
    contactModel.find().exec().then((contacts)=>{
        return response.json(contacts);
   });
}
   module.exports.show =  function show(request, response) {
    contactModel.findById(request.params.id).exec()
    .then(contact => {
        response.json(contact);
    });
   }
   module.exports.create =  function create(request, response) {
    const con = new contactModel({
        name: request.body.name,
        occupation: request.body.occupation,
        avatar: request.body.avatar
    });
    
    con.save().then(savedUser => {
        console.log(savedUser);
    });   
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }
   