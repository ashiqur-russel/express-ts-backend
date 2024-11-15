import express, { Express, NextFunction, Request, Response } from "express";

const app: Express = express();

const isRegistered = false;

app.use(express.json());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method);
  next();
};

const checkIfUserRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isRegistered) {
    next();
  } else {
    res.status(403).json({ message: "User is not registered!" });
  }
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("hello");
});

app.post("/", logger, checkIfUserRegister, (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.json({ status: true, message: "Data received successfully!" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Data received was not successful!",
    });
  }
});

export default app;
