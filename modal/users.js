const mongoose = require("mongoose");

// //create connection with mongoDB
// mongoose
//   .connect(
//     // 'mongodb://localhost:27017/my_database',
//     "mongodb+srv://test:psvrmqJMTeK9cCk@cluster0.efweo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/test",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     }
//   )
//   .then(() => console.log("connection successful"))
//   .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
name: String,
email: String,
address: String,

});
//collection creation
module.exports=mongoose.model("userLogin", playlistSchema);
