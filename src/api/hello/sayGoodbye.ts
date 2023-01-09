import { Request, Response } from "express";

const sayGoodBye = (req: Request, res: Response) => {
  res.send("Goodbye!");
};

export default sayGoodBye;
