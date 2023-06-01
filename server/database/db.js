import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-e0lohuw-shard-00-00.ezh3szn.mongodb.net:27017,ac-e0lohuw-shard-00-01.ezh3szn.mongodb.net:27017,ac-e0lohuw-shard-00-02.ezh3szn.mongodb.net:27017/?ssl=true&replicaSet=atlas-girfta-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("db connected");
  } catch (err) {
    console.log(err.message);
  }
};
export default Connection;
