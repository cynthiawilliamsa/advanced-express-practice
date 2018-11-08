//This is the starting point of the server, put all code here
let express = require("express");
//Add body parser middleware to express
let bodyParser = require('body-parser');
let ContactRoutes  = require("./routes/ContactRoutes");
let CommentRoutes  = require("./routes/CommentRoutes");
let VehicleRoutes = require("./routes/VehicleRoutes");
let ProductRoutes = require("./routes/ProductRoutes");
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(VehicleRoutes);
app.use(ProductRoutes);let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://cynthiawilliamsa:w010149c@ds139705.mlab.com:39705/express-practice");


//* Make your app listen to port 3001
app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});