import { Router } from "express";
import sayHello from "./hello/sayHello";
import sayGoodBye from "./hello/sayGoodbye";

const router = Router();

router.get("/hello", sayHello);
router.get("/goodbye", sayGoodBye);

export default router;
