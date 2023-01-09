import { Router } from "express";
import sayHello from "./hello/sayHello";

const router = Router();

router.get("/hello", sayHello);

export default router;
