"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./db/config");
const app = (0, express_1.default)();
const port = 5000;
app.get('/', async (req, res) => {
    // const value: (string | number)[] = ['Aish' as string, 25 as number, 'India' as string];
    // const user = await poolQuery('INSERT INTO users(name, age, address) VALUES($1, $2, $3) Returning *', value);
    const user = await (0, config_1.poolQuery)("SELECT id, address, name, to_char(created_at, 'DD-MM-YYYY HH24:mm') as created_at FROM users");
    return res.status(200).json({ user, ts: new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date()) });
});
app.listen(port, () => console.log(`Server starting at ${port}`));
