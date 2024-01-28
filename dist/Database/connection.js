"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DB_URI = "mongodb://localhost:27017/Login_Ts";
const connectionPromise = (0, mongoose_1.connect)(DB_URI);
connectionPromise
    .then(() => {
    console.log("Connection Success....");
})
    .catch((error) => {
    console.log("Connection error:", error);
});
// Export the mongoose connection promise
exports.default = connectionPromise;
//# sourceMappingURL=connection.js.map