"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const connection_1 = __importDefault(require("./Database/connection"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
connection_1.default
    .then(() => {
    console.log("Success");
})
    .catch((error) => {
    console.log("Error:", error);
});
const app = (0, express_1.default)();
// setting the view engine
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
// setting the public folder
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
// Use body-parser middleware for URL-encoded data
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, express_session_1.default)({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
}));
// Set up caching middleware
app.use((req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
});
app.use("/", userRoutes_1.default);
app.listen(3000, () => {
    console.log("server running on http://localhost:3000/");
});
//# sourceMappingURL=index.js.map