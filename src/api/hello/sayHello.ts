import { Request, Response } from "express";

const sayHello = (req: Request, res: Response) => {
  res.send("Hello World!");
};

export default sayHello;
