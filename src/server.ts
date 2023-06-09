import * as dotenv from 'dotenv';
import express, { Express, Request, Response } from "express";
dotenv.config();
const app: Express = express();
const port: number = process.env.NODE_ENV === 'prod' ? 5000 : 3000;
app.get('/', async (req: Request, res: Response) => {
  return res.status(200).json({ msg: 'Hello World!!', ts: new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date()) });
  // const value: (string | number)[] = ['Aish' as string, 25 as number, 'India' as string];
  // const user = await poolQuery('INSERT INTO users(name, age, address) VALUES($1, $2, $3) Returning *', value);
  // const user: Users[] = await poolQuery("SELECT id, address, name, to_char(created_at, 'DD-MM-YYYY HH24:mm') as created_at FROM users");
  // return res.status(200).json({ user, ts: new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date()) });
});
app.listen(port, () => console.log(`Server starting at ${port} 🚀`));