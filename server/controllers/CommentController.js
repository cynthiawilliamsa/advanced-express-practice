let comments = require("../comments");
let commentCount = comments.length;


module.exports.list =  function list(request, response) {
    return response.json(comments);
   }
   module.exports.show =  function show(request, response) {
    let comment = comments.find((id) => id._id == request.params.id);
    response.json(comment); 
   }
   module.exports.create =  function create(request, response) {
    request.body._id = commentCount + 1;
    comments.push(request.body);
    commentCount++;
    response.json(request.body); 
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }