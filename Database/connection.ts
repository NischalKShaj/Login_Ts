import { connect, ConnectOptions } from "mongoose";

const DB_URI = "mongodb://localhost:27017/Login_Ts";

const connectionPromise = connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

connectionPromise
  .then(() => {
    console.log("Connection Success....");
  })
  .catch((error) => {
    console.log("Connection error:", error);
  });

// Export the mongoose connection promise
export default connectionPromise;
