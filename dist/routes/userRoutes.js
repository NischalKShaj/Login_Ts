"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../Controller/userController"));
const router = express_1.default.Router();
router.get("/", userController_1.default.getLogin);
router.post("/login", userController_1.default.postLogin);
router.get("/signup", userController_1.default.getSignUp);
router.post("/home", userController_1.default.postHome);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map