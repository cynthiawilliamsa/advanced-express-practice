//This is the starting point of the server, put all code here

let express = require("express");
//Add body parser middleware to express
let bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
let commentCount = comments.length;
let contactCount = contacts.length;
let vehicleCount = vehicles.length;
let productCount = products.length;

//Add .get() routes for /contacts, /vehicles, /comments, /products
//Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
 //add a path variable for id
 //use the params.id to .find() the item from the appropriate array
 //response.json() the item found
 //Add .post() routes for /contacts, /vehicles, /comments, /products
 //Add the information from the body to the appropriate array

app.get("/comments/:id", function(req,res, next) {
    let comment = comments.find((id) => id._id == req.params.id);
    res.json(comment); 
});
app.get("/comments", function(req,res,next){
    res.json(comments);
});
app.post("/comments",function(req,res,next) {
    req.body._id = commentCount + 1;
    console.log(req.body);
    comments.push(req.body);
    commentCount++;
    res.json(req.body); 
});
app.get("/contacts/:id", function(req,res,next) {
    let contact = contacts.find((id) => id._id == req.params.id);
    res.json(contact);
});
app.get("/contacts", function(req,res,next) {
    res.json(contacts);
})

app.post("/contacts",function(req,res,next) {   
    req.body._id = contactCount + 1;
    console.log(req.body);
    contacts.push(req.body);
    contactCount++;
    res.json(req.body);    
   });

app.get("/vehicles/:id",function(req, res,next) {
    let vehicle = vehicles.find((id) => id._id == req.params.id);
    res.json(vehicle);
});
app.get("/vehicles", function(req,res,next){
    res.json(vehicles);
});
app.post("/vehicles",function(req,res,next) {
    req.body._id = vehicleCount + 1;
    console.log(req.body);
    vehicles.push(req.body);
    vehicleCount++;
    res.json(req.body); 
});
app.get("/products/:id", function(req, res, next) {
    let product = products.find((id) => id._id == req.params.id);
    res.json(product);
});
app.get("/products", function(req,res,next){
    res.json(products);
});
app.post("/products",function(req,res,next) {
    req.body._id = productCount + 1;
    console.log(req.body);
    products.push(req.body);
    productCount++;
    res.json(req.body); 
});

//* Make your app listen to port 3001
app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});