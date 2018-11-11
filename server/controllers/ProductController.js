let products = require("../products");
let productCount = products.length;
const productModel = require("../models/productModel");


module.exports.list =  function list(request, response) {
    productModel.find().exec().then((products)=>{
        return response.json(products);
    });
   }
   module.exports.show =  function show(request, response) {
    productModel.findById(request.params.id).exec()
    .then(product => {
        response.json(product);
    });   
   }
   module.exports.create =  function create(request, response) {
    const p = new productModel({
        name: request.body.name,
        description: request.body.description
    });
    
    p.save().then(savedUser => {
        console.log(savedUser);
    });
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }