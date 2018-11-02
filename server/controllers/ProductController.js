let products = require("../products");
let productCount = products.length;


module.exports.list =  function list(request, response) {
    return response.json(products);
   }
   module.exports.show =  function show(request, response) {
    let product = products.find((id) => id._id == request.params.id);
    response.json(product);
   }
   module.exports.create =  function create(request, response) {
    request.body._id = productCount + 1;   
    products.push(request.body);
    productCount++;
    response.json(request.body);    
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }