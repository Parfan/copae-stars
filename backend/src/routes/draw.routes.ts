import { Router } from "express";
const drawRouter = Router();

drawRouter.post("/", (req, res) => {

    return res.status(200).json({
        message: "success",
    });
});

drawRouter.get("/", (req, res) => {

    return res.status(200).json({
        message: "getted",
    });
});

export { drawRouter };