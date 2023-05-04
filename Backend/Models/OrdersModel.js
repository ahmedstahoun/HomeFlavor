// Requires
const mongoose = require("mongoose");
var DB_URL = "mongodb://127.0.0.1:27017/homeflavor";

// Connect to DB

mongoose.connect(DB_URL,{useNewUrlParser:true});    


//Orders schema
let OrdersSchema = new mongoose.Schema({
    products:{type:[{ product_name: String, product_image: String, price: Number,product_details: String,quantity:Number}],required:true},
    // total_price:{type:Number,required:true},
    date:{type:String,required:true},
    status:{type:String, enum:['Pending', 'Accepted', 'Canceled'],required:true}
    // user_id:{type: Schema.Types.ObjectId, ref: 'users',required:true},
    // store_id:{type: Schema.Types.ObjectId, ref: 'stores',required:true}
})

// Function to make virtual field
OrdersSchema.virtual('total_price').get(function() {
    let total_price;
    this.products.forEach(p => {
       total_price+=p.price*p.quantity;
    });
    return total_price;
  });

//Export to controller
module.exports = mongoose.model("orders", OrdersSchema);