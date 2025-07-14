import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

app.use(cors({
  origin: 'https://authentication-full-stack-project.vercel.app',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("API Working — Auth Backend is Live!");
});

// ✅ API Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
