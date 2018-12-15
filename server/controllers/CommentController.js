// let comments = require("../comments");
// let commentCount = comments.length;
const commentModel = require("../models/commentModel");


module.exports.list =  function list(request, response) {
    commentModel.find().exec().then((comments)=>{
        return response.json(comments);
    });
   }
   module.exports.show =  function show(request, response) {
    commentModel.findById(request.params.id).exec()
    .then(comment => {
        response.json(comment);
    });
   }
   module.exports.create =  function create(request, response) {
    const com = new commentModel({
        body: request.body.body
    });
    
    com.save().then(savedUser => {
        console.log(savedUser);
    });
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }