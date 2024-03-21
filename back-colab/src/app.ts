import express, { Express, Request, Response }  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"; 

dotenv.config();
// console.log(`App name: ${process.env.APP_NAME}`); // print environment variable

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

// app.use('/api', studentRouter);
app.get('/', (req: Request, res: Response) => {
	res.status(200).send('Hello, world!');
});

export default app;