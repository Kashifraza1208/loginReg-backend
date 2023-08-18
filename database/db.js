const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(`Error while connecting with database`, error);
  }
};

module.exports = Connection;
