"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var PORT = 3000;
app.set('views', path_1.default.join(__dirname, path_1.default.sep, 'views'));
app.set('view engine', 'pug');
require('./routes/routes')(app);
app.listen(PORT, function () {
    console.log("Server started at port " + PORT);
});
