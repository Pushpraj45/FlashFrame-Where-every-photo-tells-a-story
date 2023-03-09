const mongoose = require("mongoose");

module.exports = async () => {
  const mongouri =
    "mongodb+srv://Pushpraj:SlJCwOu31Si4tPo5@cluster0.skmaupi.mongodb.net/?retryWrites=true&w=majority";
    mongoose.set('strictQuery', false);

  try {
    const connect = await mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1); // server yaha band ho jayega
  }
};
